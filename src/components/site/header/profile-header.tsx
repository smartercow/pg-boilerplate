import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '@lib/supabase/database';
import { useWindowSize } from '@lib/context/window-context';
import { HeroIcon } from '@components/ui/icons/hero-icon';
import { useUserContext } from '@lib/context/user-context';

export default function ProfileHeader(): JSX.Element {
  const supabaseClient = useSupabaseClient<Database>();
  const { width } = useWindowSize();
  const router = useRouter();
  const { isAdmin } = useUserContext();

  const handleRef = (link: string) => {
    router.push(link);
  };

  const handleSignout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/home');
  };

  return (
    <div className='w-fit pt-0 text-right lg:pt-2'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button
            className='dosis dosis hover-animation inline-flex w-full justify-center rounded-md bg-black bg-opacity-10 
                       py-2 px-2 text-sm font-semibold uppercase text-white hover:bg-opacity-30 hover:opacity-90
                       md:px-4 md:text-base lg:font-bold'
          >
            {width > 768 ? 'Account' : <HeroIcon iconName='UserIcon' />}
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className='bg-main-blue-sec absolute right-0 mt-1 w-56 origin-top-right rounded-md 
                       shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          >
            <div className='px-1 py-1 '>
              {isAdmin && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleRef('/axminx')}
                      className={`${
                        active
                          ? 'bg-primary bg-opacity-80 text-white'
                          : 'text-main-gray'
                      } dosis hover-animation group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold md:text-base`}
                    >
                      Admin dashboard
                    </button>
                  )}
                </Menu.Item>
              )}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleRef('/account')}
                    className={`${
                      active
                        ? 'bg-primary bg-opacity-80 text-white'
                        : 'text-main-gray'
                    } dosis hover-animation group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold md:text-base`}
                  >
                    Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleRef('/account/favorites')}
                    className={`${
                      active
                        ? 'bg-primary bg-opacity-80 text-white'
                        : 'text-main-gray'
                    } dosis hover-animation group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold md:text-base`}
                  >
                    Favorites
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleRef('/account/liked-videos')}
                    className={`${
                      active
                        ? 'bg-primary bg-opacity-80 text-white'
                        : 'text-main-gray'
                    } dosis hover-animation group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold md:text-base`}
                  >
                    Liked videos
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleSignout}
                    className={`${
                      active
                        ? 'bg-primary bg-opacity-80 text-white'
                        : 'bg-primary text-white'
                    } dosis hover-animation group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold md:text-base`}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
