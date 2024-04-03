import Logo from './logo';
function Sidebar() {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                <div class="flex items-center justify-center h-14 border-b">
                    <Logo />
                </div>
                <div class="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul class="flex flex-col py-4 space-y-1">
                        <li class="px-5">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-sm font-light tracking-wide text-gray-500">Tokens</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-off-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6">
                                <span class="inline-flex justify-center items-center ml-4">

                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12C17.1022 12 16.7206 11.842 16.4393 11.5607C16.158 11.2794 16 10.8978 16 10.5C16 10.1022 16.158 9.72064 16.4393 9.43934C16.7206 9.15804 17.1022 9 17.5 9C17.8978 9 18.2794 9.15804 18.5607 9.43934C18.842 9.72064 19 10.1022 19 10.5C19 10.8978 18.842 11.2794 18.5607 11.5607C18.2794 11.842 17.8978 12 17.5 12ZM14.5 8C14.1022 8 13.7206 7.84196 13.4393 7.56066C13.158 7.27936 13 6.89782 13 6.5C13 6.10218 13.158 5.72064 13.4393 5.43934C13.7206 5.15804 14.1022 5 14.5 5C14.8978 5 15.2794 5.15804 15.5607 5.43934C15.842 5.72064 16 6.10218 16 6.5C16 6.89782 15.842 7.27936 15.5607 7.56066C15.2794 7.84196 14.8978 8 14.5 8ZM9.5 8C9.10218 8 8.72064 7.84196 8.43934 7.56066C8.15804 7.27936 8 6.89782 8 6.5C8 6.10218 8.15804 5.72064 8.43934 5.43934C8.72064 5.15804 9.10218 5 9.5 5C9.89782 5 10.2794 5.15804 10.5607 5.43934C10.842 5.72064 11 6.10218 11 6.5C11 6.89782 10.842 7.27936 10.5607 7.56066C10.2794 7.84196 9.89782 8 9.5 8ZM6.5 12C6.10218 12 5.72064 11.842 5.43934 11.5607C5.15804 11.2794 5 10.8978 5 10.5C5 10.1022 5.15804 9.72064 5.43934 9.43934C5.72064 9.15804 6.10218 9 6.5 9C6.89782 9 7.27936 9.15804 7.56066 9.43934C7.84196 9.72064 8 10.1022 8 10.5C8 10.8978 7.84196 11.2794 7.56066 11.5607C7.27936 11.842 6.89782 12 6.5 12ZM12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5C13.5 19.11 13.35 18.76 13.11 18.5C12.88 18.23 12.73 17.88 12.73 17.5C12.73 17.1022 12.888 16.7206 13.1693 16.4393C13.4506 16.158 13.8322 16 14.23 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11C21 6.58 16.97 3 12 3Z" fill="#A7A6CD" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Colors</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-off-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4V7H7V19H10V7H15V4H2ZM21 9H12V12H15V19H18V12H21V9Z" fill="#A7A6CD" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Typography</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-off-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5H17V3H15M15 21H17V19H15M11 5H13V3H11M19 5H21V3H19M19 9H21V7H19M19 21H21V19H19M19 13H21V11H19M19 17H21V15H19M3 5H5V3H3M3 9H5V7H3M3 13H5V11H3M3 17H5V15H3M3 21H5V19H3M11 21H13V19H11M7 21H9V19H7M7 5H9V3H7V5Z" fill="#A7A6CD" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Borders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-off-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.5L8.42 8.06L2 9.74L6.2 14.88L5.82 21.5L12 19.09L18.18 21.5L17.8 14.88L22 9.74L15.58 8.06L12 2.5ZM9.38 10.5C10 10.5 10.5 11 10.5 11.63C10.5 11.7771 10.471 11.9227 10.4147 12.0586C10.3585 12.1945 10.276 12.318 10.172 12.422C10.068 12.526 9.94449 12.6085 9.80861 12.6647C9.67272 12.721 9.52708 12.75 9.38 12.75C8.75 12.75 8.25 12.25 8.25 11.63C8.25 11 8.75 10.5 9.38 10.5ZM14.63 10.5C15.25 10.5 15.75 11 15.75 11.63C15.75 11.927 15.632 12.2119 15.422 12.422C15.2119 12.632 14.927 12.75 14.63 12.75C14 12.75 13.5 12.25 13.5 11.63C13.5 11 14 10.5 14.63 10.5ZM9 15H15C14.7536 15.5927 14.3371 16.099 13.8032 16.4553C13.2693 16.8115 12.6418 17.0016 12 17.0016C11.3582 17.0016 10.7307 16.8115 10.1968 16.4553C9.66287 16.099 9.24642 15.5927 9 15Z" fill="#A7A6CD" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Icons</span>
                            </a>
                        </li>
                        <li class="px-5">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-sm font-light tracking-wide text-gray-500">Atoms</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-off-white text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-primary pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6C11.34 6 10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5ZM20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8C13.55 8 14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5ZM20 2H4C2.9 2 2 2.9 2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H8V12H4V4H20V12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z" fill="#A7A6CD" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Buttons</span>
                            </a>
                        </li>

                        <li class="px-5">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-sm font-light tracking-wide text-gray-500">Components</div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;