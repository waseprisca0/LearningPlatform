import Link from 'next/link'
import Dashboard from '@/components/Dashboard'
import NotFoundPage from '@/components/NotFound/NotFound'
 
export default function NotFound() {
   return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center">
                
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                </div>
            </div>
        </main>
    )
}
