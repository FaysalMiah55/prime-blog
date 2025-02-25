import profile from '../../assets/images/profile0.jpeg'

export const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  max-w-7xl mx-auto border-b-1 border-gray-500'>
            <h1 className='text-4xl font-bold text-gray-500'>Prime<span className='text-4xl font-bold text-red-500'>Blog</span></h1>
            <img className='w-14 h-14 rounded-full border-2 border-gray-500' src={profile} alt="Main Profile" />
        </header>
    )
}
