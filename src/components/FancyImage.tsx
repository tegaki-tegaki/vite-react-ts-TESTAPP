type Props = {
	src: string;
};

/**
 * like a normal image, but sets a fancy bg color
 * based on the contents of the image! (shown through padding)
 */
export const FancyImage = ({ src }: Props) => {
	return (
		<div className="p-10 bg-pink-800 ">
			<img src={src} />
		</div>
	);
};
