type Props = {
	children: React.ReactNode;
};

export const Card = (props: Props) => {
	return (
		<div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-gray-200 text-black border-gray-800">
			{props.children}
		</div>
	);
};
