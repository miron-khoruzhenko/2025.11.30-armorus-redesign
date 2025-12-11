import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

const NotFound = () => {
	return (
		<section>
			<Header variant='solid' />

			<div className='h-screen flex flex-col leading-[0.9] items-center justify-center uppercase text-[8vw] font-display '>
				<h2 className="">404</h2>
				<h1 className="text-[6vw]">Not Found</h1>
			</div>
			<Footer />
		</section>
	)
}

export default NotFound