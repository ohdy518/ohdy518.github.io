"use client"
import Image from 'next/image'


import { NavigationMenuDemo } from '@/components/ui/navbar'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"

export default function Home() {
  const router = useRouter()
  
  return (
    <main className='px-8 py-8'>
      
      <div className='py-8 '>
        <PageHeader>
          <PageHeaderHeading>
            four-oh-four
          </PageHeaderHeading>
          <PageHeaderDescription>
            The page you requested is not found. There might be a typo, <br/>or the page might&apos;ve moved to a different location.   
          </PageHeaderDescription>
          <PageActions>
          <Button onClick={() => router.back()}>Go back</Button>
          <Button variant="secondary" onClick={() => router.push("mailto:ohdy518@gmail.com?subject=%5BPORTFOLIO%5D%20%5BBUG%5D%20Page%20not%20found&body=(write%20content%20here%3B%20please%20include%20the%20page%20you%20tried%20to%20visit)%0D%0A%0D%0A%0D%0A%3E%20(write%20nickname%20here)%20via%20the%20portfolio%20website")}>Notify me about this problem</Button>
          </PageActions>
        </PageHeader>
        {/*
        <h1 className='scroll-m-20 text-9xl font-semibold tracking-tight lg:text-9xl text-center pt-24'>
          Hello world!
        </h1>
        <h2 className="scroll-m-20 pb-2 text-6xl font-semibold tracking-tight first:mt-0 text-center pt-12">
      I'm ohdy518
    </h2>
  */}
      </div>
    </main>
  )
  
  
  
}
