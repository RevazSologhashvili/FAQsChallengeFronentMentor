'use client'
import React, { useState } from 'react'
import QA from './QA'
import Image from 'next/image'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return (
        <div className='bg-White p-12 rounded-3xl max-w-2xl mx-6'>
            <div className="heading flex gap-4 items-center">
                <Image src={'/icon-star.svg'} width={40} height={40} alt='Star Icon' />
                <h1 className='heading font-bold text-6xl text-DarkPurple'>FAQs</h1>
            </div>
            <QA question="What is Frontend Mentor, and how will it help me?" answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building." isOpen={openIndex === 0} onToggle={() => handleToggle(0)} />
            <QA question="Is Frontend Mentor free?" answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels."
                isOpen={openIndex === 1} onToggle={() => handleToggle(1)} />
            <QA question="Can I use Frontend Mentor projects in my portfolio?" answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!"
                isOpen={openIndex === 2} onToggle={() => handleToggle(2)} />
            <QA question="How can I get help if I'm stuck on a Frontend Mentor challenge?" answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members."
                isOpen={openIndex === 3} onToggle={() => handleToggle(3)} />
        </div>
    )
}

export default FAQ