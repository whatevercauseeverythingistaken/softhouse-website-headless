'use client';

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "../CursorBlinker/CursorBlinker";

// Delay is used when we need to chaining between text segments separated by spans for example
// useBlinker determines whether we want to use blinking typing cursor or not
const TypingAnimation = ({ children = '', delay = 0, duration = children.length / 30, useBlinker = true, finishedCallback = undefined }) => {
	const [animationStarted, setAnimationStarted] = useState(false);
	const [animationFinished, setAnimationFinished] = useState(false);

	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) => children.slice(0, latest));

	useEffect(() => {
		const controls = animate(count, children.length, {
			type: 'tween',
			duration,
			ease: 'easeInOut',
			delay,
			onComplete: () => setAnimationFinished(true)
		});

		// Mark animation as started when it actually starts - after the delay
		const timeout = setTimeout(() => {
			setAnimationStarted(true);
		}, delay * 1000);

		return () => {
			clearTimeout(timeout);
			controls.stop;
		};
	}, []);

	// Run the finished callback if we have any
	useEffect(() => {
		if ( finishedCallback && animationFinished )
		{
			finishedCallback();
		}
	}, [finishedCallback, animationFinished]);

	return (
		<>
			<motion.span>
				{displayText}
			</motion.span>
			{!!useBlinker && animationStarted && !animationFinished && <CursorBlinker />}
		</>
	);
};

export default TypingAnimation;