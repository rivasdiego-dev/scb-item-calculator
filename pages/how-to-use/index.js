

export default function Home() {
    return (
        <main className="bg-[url(/bg2.jpg)] bg-cover bg-center min-h-screen text-white">

            <header className="p-12">
                <a
                    className="absolute rounded-full hover:bg-neutral-200 transition-all"
                    href="/"
                >
                    <img src="/arrow_back.svg" alt="back"></img>
                </a>
                <h1 className="shadow-md shadow-neutral-800 w-fit m-auto text-4xl p-10 px-24 backdrop-blur-xl backdrop-grayscale rounded-lg"> How to use this website </h1>

            </header>
        </main>
    );
}