import Sidebar from '../Components/Sidebar';
function Atoms() {
    return (
        <div class="w-screen bg-off-white mx-auto flex flex-row items-center text-muted-black">

        <div class="flex w-full">
            <div class="w-1/4"><Sidebar /></div>
            <div class="w-3/4 px-10 py-20"><h1 class="text-7xl font-display mb-4">Atoms</h1>
                <p class="text-2xl mb-8">React + Tailwind UI Kit for bootstrapping your projects.</p></div>
        </div>

    </div>

    );
}

export default Atoms;