"use client";
import React from 'react'
import { MdDownloading } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
    return (
        <div>
            <div className="hero bg-base-200 pt-20 pb-10">
                <div className="hero-content flex-col w-full px-20 lg:flex-row-reverse">
                    <Image
                        src="/Images/jenilsaija.jpg"
                        width={500}
                        height={500}
                        alt="Jenil Saija"
                        className="w-4/12 rounded-lg shadow-2xl h-auto" />
                    <div className='w-9/12 font-serif'>
                        <p className='text-md text-secondary mb-2'>Hello</p>
                        <h1 className="text-5xl font-bold">I'm <span className='text-secondary'>Jenil Saija</span></h1>
                        <p className="py-6">
                            A Full Stack Web Developer.
                        </p>
                        <div className='flex gap-2'>
                            <button className="btn btn-outline btn-primary text-md"><MdDownloading size={25} />
                                Resume</button>
                            <button className="btn btn-outline text-md" onClick={()=>{router.push("/projects")}}><BsPersonWorkspace
                                size={25} />
                                Work</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
