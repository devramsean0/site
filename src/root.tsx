// @refresh reload
import { Suspense } from 'solid-js';
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from 'solid-start';
// CSS files
import './css/theme.css';

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Sean Outram</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body>
				<ErrorBoundary>
					<A class="" href="/">
						Index
					</A>
					<A class="" href="/about">
						About
					</A>
					<Suspense>
						<main>
							<div class="container">
								{/* 								<Routes>
									<FileRoutes />
								</Routes> */}
								<div class="card">
									<h1 class="ultratitle">Sean Outram</h1>
									<h2 class="subtitle">Software Engineer by hobby</h2>
								</div>
								<Routes>
									<FileRoutes />
								</Routes>
								&copy; {new Date().getFullYear()} Sean Outram. All rights reserved.
							</div>
						</main>
					</Suspense>
				</ErrorBoundary>
				<Scripts />
			</Body>
		</Html>
	);
}
