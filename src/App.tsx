import "./App.css";
import { Card } from "./components/Card";
import { CardHolder } from "./components/CardHolder";
import { FancyImage } from "./components/FancyImage";
import { MyComponent } from "./components/MyComponent";

function App() {
	return (
		<>
			<main>
				<h1>This is the main content!</h1>
				<MyComponent name="mr. frog" />
				<Card>
					<p>this is card is floating on its own</p>
					<MyComponent name="card person" />
				</Card>
				<CardHolder>
					<Card>
						<p>
							this is card is{" "}
							<span className="bg-gray-800 bg-opacity-10 py-0.5 px-1 rounded-sm">
								<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
									inside
								</span>
							</span>{" "}
							a CardHolder
						</p>
						<MyComponent name="card person" />
					</Card>
					<Card>
						<p>
							this is card is <span className="underline">inside</span> a
							CardHolder
						</p>
						<MyComponent name="card person" />
					</Card>
					<Card>
						<p>
							this is card is <span className="underline">inside</span> a
							CardHolder
						</p>
						<MyComponent name="card person" />
					</Card>
					<Card>
						<p>
							this is card is <span className="underline">inside</span> a
							CardHolder
						</p>
						<MyComponent name="card person" />
					</Card>
				</CardHolder>
				<FancyImage src="https://http.dog/200.jpg" />
			</main>
		</>
	);
}

export default App;
