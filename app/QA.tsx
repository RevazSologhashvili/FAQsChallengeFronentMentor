'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface qa {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const QA = (props: qa) => {
    const handleClick = () => {
        props.onToggle();
    };

    const showing = props.isOpen ? 'h-auto py-4 px-2 overflow-normal' : 'h-0 overflow-hidden p-0';
    const icon = props.isOpen ? "/icon-minus.svg" : "/icon-plus.svg";

    return (
        <div className='item max-w-4xl border-b border-b-GrayPurple/10  py-4'>
            <div className='question flex justify-between items-center cursor-pointer gap-4' onClick={handleClick}>
                <div className='header font-bold hover:text-[#9b3ac3]'>{props.question}</div>
                <div className='overview'><Image src={icon} alt="plus icon" width={32} height={32} /></div>
            </div>
            <div className={showing}>
                <p className='text-GrayPurple font-medium'>{props.answer}</p>
            </div>
        </div>
    )
}

export default QA