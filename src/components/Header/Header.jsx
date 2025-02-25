import profile from '../../assets/images/profile0.jpeg'

export const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-1 border-gray-500'>
            <h1 className='text-4xl font-bold text-gray-500'>Prime<span className='text-4xl font-bold text-red-500'>Blog</span></h1>
            <img className='rounded-4xl border-2 border-gray-500' width={40} height={40} src={profile} alt="Main Profile" />
        </header>
    )
}
