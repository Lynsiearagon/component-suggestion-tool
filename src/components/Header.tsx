import { Divider } from '@visa/nova-react';


const Header = () => {
    return (
        <div className="flex flex-row justify-between items-end p-8 font-mono uppercase shadow-md">
            <div>
                {/* Logo Idea 3: Stacked, bold, with accent underline */}
                <div className="flex flex-col items-start">
                    <span className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-mono uppercase leading-none tracking-wide">Component</span>
                    <span className="text-3xl lg:text-5xl font-extrabold text-blue-600 tracking-tight font-mono uppercase leading-none tracking-wide">Suggestion</span>
                    <span className="text-3xl lg:text-5xl font-extrabold text-pink-500 tracking-tight font-mono uppercase leading-none mb-1 tracking-wide">Tool</span>
                    <span className="text-base lg:text-xl font-semibold text-gray-600 font-mono uppercase border-l-4 border-blue-500 pl-2">Lynsie Aragon</span>
                </div>
                
                
            </div>
            <div className="flex gap-8 text-base font-semibold text-gray-600 font-mono uppercase border-l-4 border-blue-500 pl-2 lg:text-xl">
                <a href="https://www.linkedin.com/in/lynsie-aragon-dev/" target="_blank" rel="noopener noreferrer"  className="hover:text-pink-500">LinkedIn</a>
                <a href="https://lynsiearagon.github.io/Lynsie-portfolio/LynsieAragonResume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Resume</a>
            </div>
        </div>
    )
}

export default Header;