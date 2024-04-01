"use client"
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import { Button } from "../ui/button";
import searching from "./openai-test";
import { Input } from "../ui/input";
import loadingGIf from "../../assets/loading.gif";

export default function OpenAiPage() {
  const { isOpen, onOpen, onClose:chakraOnClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [validation, setValidation] = useState(false);

  const handleChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event:any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission or anything else
      handleSave();
    }
  };
      const [isLogged, setIsLogged] = useState(false);
     
 useEffect(() => {
    // This function runs after the component mounts, ensuring it's in a client-side context
    const checkLoginStatus = () => {
      if (typeof window !== "undefined") {
        const loggedIn = localStorage.getItem('isLogged');
        setIsLogged(loggedIn as any);
      }
    };

    checkLoginStatus();
 }, []); 

  const handleSave = async () => {
    setValidation(true);
    if (inputValue) {
      setValidation(false);
      setData("");
      setLoading(true);
      const { message } = await searching(inputValue);
      setLoading(false);
      if (message) {
        setData(message);
      }
    }
  };
    const onClose = () => {
    chakraOnClose(); // Call the original onClose function to actually close the modal
    // Reset your states below
    setInputValue("");
    setData("");
    setLoading(false);
    setValidation(false);
  };

  return (
    <div className={`flex justify-end gap-2 mr-2 ${isLogged?'my-2':''}`}>
      {isLogged && <div>
        <Button onClick={onOpen}>Need help?</Button>
        <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              No question is too big or too small. What would you like to learn about today?
            </ModalHeader>
            <ModalBody>
              <section className="flex items-center gap-3">
                <div className="w-[90%]">
                  <Input
                    type="text"
                    placeholder="Send message..."
                    className={`rounded-lg border px-3 py-2 ${validation ? 'border-red-900' : 'border-neutral-800'} w-full relative z-10 bg-[#eee] placeholder:text-neutral-700`}
                    value={inputValue}
                    name="search"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} // Handle the Enter key
                  />
                </div>
                <div>
                  <Button onClick={handleSave} className="bg-[#eee] text-[black]">
                    <ArrowRight />
                  </Button>
                </div>
              </section>
              {data && (
                <section className="my-7 bg-[#eee] p-4">
                  <p>{data}</p>
                </section>
              )}
              {loading && (
                <section className="my-7 bg-[#eee] p-4 flex justify-center rounded">
                  <Image alt="Saving...." src={loadingGIf} height={29} /> 
                </section>
              )}
            </ModalBody>
            <ModalFooter>
              <Button className="mr-3" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>}
    </div>
  );
}
