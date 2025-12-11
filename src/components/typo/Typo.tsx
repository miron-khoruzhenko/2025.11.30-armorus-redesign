import React from 'react'

const Typography = (props: {
	className?: string
	children?: React.ReactNode
}) => {
	return (
		<p className={`text-sm font-bold font-display text-white ${props.className || ""}`} >
			{props.children}
		</p>
	)
}

export default Typography