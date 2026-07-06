import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-full bg-zinc-950 text-white">
            <section className="hidden md:flex md:w-1/2 bg-linear-to-br from-indigo-600 via-violet-600 to-purple-700 flex-col justify-center items-center">
                <div className="max-w-md p-12 flex flex-col gap-8">
                    {/* Logo */}
                    <h1 className='font-bold text-5xl flex items-center gap-3 justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text w-10 h-10"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
                        Notes
                    </h1>
                    {/* Tagline */}
                    <h2 className='text-4xl font-bold text-center'>
                        Capture your ideas. <br />
                        Organize your life.
                    </h2>
                    {/* Short description*/}
                    <p className="text-center text-indigo-100 leading-7"> Store notes securely and access them from anywhere.</p>
                    <div className='relative flex justify-center'>
                        {/* Illustration */}
                        {/* Sparkles */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles absolute w-8 h-8 -top-2 right-20 opacity-70"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
                        {/* Notebook */}
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen w-24 h-24 opacity-100 transition-transform duration-300 hover:scale-105"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
                        {/* Pencil */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil  absolute w-7 h-7 -bottom-2 left-25 opacity-70"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                    </div>
                </div>
            </section>
            <section className="flex flex-1 justify-center items-center p-10">
                <div className="w-full max-w-md bg-zinc-800 rounded-3xl shadow-2xl shadow-black/15 p-10">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default AuthLayout
