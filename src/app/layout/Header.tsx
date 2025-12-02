import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-gray-200 to-gray-300 shadow-lg border-b border-gray-200">
            {/* Верхняя часть с лого и телефоном */}
            <div className="flex justify-between items-center px-8 py-5">
                {/* Логотип */}
                <div className="flex items-center">
                    <Link href='/'>
                        <div className="group cursor-pointer">
                            <div className="text-2xl font-bold bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent transition-all duration-300 group-hover:from-amber-700 group-hover:to-amber-800">
                                Pinova Center
                            </div>
                            <div className="text-xs text-gray-700 mt-1 transition-colors duration-300 group-hover:text-gray-700">
                                Слоган
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Телефон */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm  group hover:bg-amber-100 transition-colors duration-300">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-400 font-medium">Запись на консультацию</div>
                        <div className="text-xl font-semibold text-gray-700 hover:text-amber-700 transition-colors duration-300">
                            +7(928)928-51-10
                        </div>
                    </div>
                </div>
            </div>

            {/* Навигация */}
            <nav className=" bg-blue-100 backdrop-blur-md border-t border-gray-100 shadow-sm">
                <ul className="flex justify-end items-center px-8 space-x-2">
                    {[
                        { href: '/about', label: 'О НАС' },
                        { href: '/services', label: 'УСЛУГИ' },
                        { href: '/specialists', label: 'СПЕЦИАЛИСТЫ' },
                        { href: '/prices', label: 'ЦЕНЫ' },
                        { href: '/promos', label: 'АКЦИИ' },
                        { href: '/reviews', label: 'ОТЗЫВЫ' },
                        { href: '/contacts', label: 'КОНТАКТЫ' }
                    ].map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                <div className="relative px-5 py-3  text-gray-700 hover:text-gray-500 transition-all duration-300 group">
                                    <span className="relative z-10 font-semibold text-sm tracking-wide">
                                        {item.label}
                                    </span>
                                    {/* Подсветка фона при hover */}
                                    <div className="absolute inset-0 bg-slate-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                                    {/* Светящийся эффект */}
                                    <div className="absolute inset-0 rounded-xl bg-gray-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Декоративная полоска */}
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60"></div>
        </header>
    )
}