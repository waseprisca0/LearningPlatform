"use client"
import { useFieldArray } from "react-hook-form";
import Image from "next/image";
import loadingGIf from "../../assets/loading.gif"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import useCreateCourse from "./hooks/useCreateCourse";
import useFetchOneCourse from "../SelectedCourse/hooks/useFetchOneCourse";
import { useParams } from "next/navigation";
export default function Create({ isEdit,data }: { isEdit: boolean,data?:any }) {
 const {
    handleSave,
    errors,
    handleSubmit,
    isSuccess,
    isEditing,
    isLoading,
    register,
    control,
    isValid,
    reset,
    watch,
    setError
 } = useCreateCourse();
 

 const { fields: chapterFields, append: appendChapter } = useFieldArray({
    control,
    name: "Chapters",
 });

 const onSubmit =  (data: any) => {
     handleSave();
    reset();
 };

 const chapterAddition = () => {
    appendChapter({ name: "", content: "" });
 };

 return (
    <div className="w-[100%] mt-[5rem] flex justify-center items-center text-black">
      <div className="w-[50%] ml-[25%] lg:ml-[17%] pb-4 flex flex-col rounded-md bg-[#eee] items-center justify-center">
        <form className="w-[100%] px-9" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-black my-7">
            <Label className="text-black" htmlFor="courseTitle">COURSE TITLE</Label>
            <Input {...register("CourseName", { required: "Course name is required" })} defaultValue={isEdit?data?.CourseName:'' as string} type="text" id="courseTitle" placeholder="Title" />
            {errors.CourseName && <p>{errors.CourseName.message}</p>}
          </div>
          <div className="text-black my-7">
            <Label className="text-black" htmlFor="courseDescription">Course description</Label>
            <Textarea {...register("Description", { required: "Course description is required" })} defaultValue={isEdit?data?.Description:''} className="text-black" placeholder="Course description" id="courseDescription" />
            {errors.Description && <p>{errors.Description.message}</p>}
          </div>
          {isEdit?data.Chapters.map((field:any, index:number) => (
            <div key={index}>
              <div className="text-black my-7">
                <Label className="text-black" htmlFor={`chapters[${index}].name`}>Chapter {index + 1}:</Label>
                <Input {...register(`Chapters[${index}].name` as any, { required: "Chapter name is required" })} defaultValue={isEdit?field.name:''} type="text" id={`chapters[${index}].name`} placeholder="Chapter name" />
                {errors.Chapters && errors.Chapters[index]?.name && <p>{errors?.Chapters[index]?.name?.message as any}</p>}
              </div>
              <div className="text-black my-7">
                <Label htmlFor={`chapters[${index}].content`}>Chapter content</Label>
                <Textarea {...register(`Chapters[${index}].content` as any, { required: "Chapter content is required" })} defaultValue={isEdit?field.content:''} className="text-black" placeholder="Type your content here." id={`chapters[${index}].content`} />
                {errors.Chapters && errors.Chapters[index]?.content && <p>{errors.Chapters[index]?.content?.message}</p>}
              </div>
            </div>
          )):chapterFields.map((field:any, index:number) => (
            <div key={field.id}>
              <div className="text-black my-7">
                <Label className="text-black" htmlFor={`chapters[${index}].name`}>Chapter {index + 1}:</Label>
                <Input {...register(`Chapters[${index}].name` as any, { required: "Chapter name is required" })} type="text" id={`chapters[${index}].name`} placeholder="Chapter name" />
                {errors.Chapters && errors.Chapters[index]?.name && <p>{errors?.Chapters[index]?.name?.message as any}</p>}
              </div>
              <div className="text-black my-7">
                <Label htmlFor={`chapters[${index}].content`}>Chapter content</Label>
                <Textarea {...register(`Chapters[${index}].content` as any, { required: "Chapter content is required" })} className="text-black" placeholder="Type your content here." id={`chapters[${index}].content`} />
                {errors.Chapters && errors.Chapters[index]?.content && <p>{errors.Chapters[index]?.content?.message}</p>}
              </div>
            </div>
          ))}
          <div className="text-black my-7">
            <Label className="text-black" htmlFor="courseDescription">Link guidance</Label>
            <Textarea {...register("Links", { required: "Links description is required" })} defaultValue={isEdit?data.Links:''} className="text-black" placeholder="Links description" id="Links" />
            {errors.Description && <p>{errors?.Links?.message}</p>}
          </div>
          <div className="flex justify-end mb-3">
            <div className="flex items-center gap-3">
              <div>
                <div className="w-[100%] bg-zinc-300 hover:bg-zinc-400 rounded-full hover:text-white text-[black] cursor-pointer py-2 px-4" onClick={chapterAddition}>
                 ADD CHAPTER
                </div>
              </div>
              <div>
                {!isLoading?<Button className="w-[100%] text-white rounded-full bg-[#ae53a6] hover:bg-[#c159b8]" type="submit">
                 {isEditing?<Image alt='Saving....' src={loadingGIf} height={25}/>:isEdit ? 'EDIT' : 'SAVE'}
                </Button>:<Button type="submit" className="w-[100%] bg-[#502779] hover:bg-[#502779a9] text-[white]">{isLoading||isEditing?<Image alt='Saving....' src={loadingGIf} height={29}/>:'Register'}</Button>}
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
 );
}
