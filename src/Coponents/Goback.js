"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBack = () => {
    const router = useRouter();
   
    return <button onClick={()=>router.back()}>Go back</button>;
};

export default GoBack;