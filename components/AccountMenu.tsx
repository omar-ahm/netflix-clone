import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser';
import { BiExit } from 'react-icons/bi';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    const { data } = useCurrentUser();

    if (!visible) {
        return null;
    }

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                <img className='w-8 rounded-md' src='/images/default-blue.png' alt='' />
                <p className='text-white text-sm group-hover/item:underline'>
                    {data?.name}
                </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-4' />
            <div onClick={() => signOut()} className='px-3 text-center text-white text-sm hover:undeline'>
                
            <div className='
                cursor-pointer
                 px-2 md:px-4
                 w-auto
                 h-8
                 text-s lg:text-md
                 font-semi-bold
                 hover:bg-opacity-20
                 lg:w-auto
                 lg:h-10
                 border-2
                 rounded
                 flex
                 justify-center
                 items-center
                 transition
                 hover:bg-neutral-300' >
                    
            <BiExit className='
                    mr-2 ' size={20}/>
                    Sign out of Netflix
            </div>
            
                

            </div> 

        </div>

    </div>
  )
}

export default AccountMenu