import Logo from '../Components/logo';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div class="w-screen bg-off-white mx-auto flex flex-row items-center text-muted-black">
            <div class="absolute top-10 left-10"><Logo /></div>
            <div class="w-2/5 pl-6 min-h-screen flex flex-col justify-center">

                <h1 class="text-7xl font-display mb-4">Jelly UI Kit</h1>
                <p class="text-2xl mb-8">TailwindCSS + Figma UI Kit for bootstrapping your projects.</p>
                <div class="space-y-4 mb-8 flex flex-col content-start flex-wrap text-left">
                    <Link to="/tokens"><button class="py-4 px-20 rounded-full bg-white text-gray-800 font-semibold">Tokens</button></Link>
                    <Link to="/atoms"><button class="py-4 px-20 rounded-full bg-white text-gray-800 font-semibold">Atoms</button></Link>
                    <Link to="/components"><button class="py-4 px-20 rounded-full bg-white text-gray-800 font-semibold">Components</button></Link>
                    <button class="py-4 px-20 bg-primary text-white rounded-full hover:bg-blue-700 transition duration-300">Download Figma</button>
                </div>
            </div>
            <div class="w-3/5 bg-[url('jelly-ui-abstract-art.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
            </div>
        </div>

    );
}

export default Home;