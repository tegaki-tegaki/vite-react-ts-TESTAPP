type Props = {
	children: React.ReactNode;
};

export const CardHolder = (props: Props) => {
	return (
		<>
			<p className="text-left">This is a CardHolder</p>
			<div className="my-3 max-w-sm rounded overflow-hidden shadow-lg bg-gray-50">
				{props.children}
			</div>
		</>
	);
};
