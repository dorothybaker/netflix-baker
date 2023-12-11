import { signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

interface AccountMenuProps {
  visible?: boolean;
  user: Record<string, any>;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible, user }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="w-56 absolute top-10 right-0 bg-[#111] shadow-sm shadow-black flex-col p-3 overflow-x-hidden">
      <div className="flex flex-col gap-3">
        <div className="px-2 group/item flex flex-row items-center w-full gap-3">
          <img
            src={user?.image ? user?.image : "/images/default-slate.png"}
            alt="profile picture"
            className="w-7 rounded-full"
          />
          <p className="text-white group-hover/item:underline">{user?.name}</p>
        </div>
        <hr className="bg-gray-500 h-px border-0 my-2" />
        <div
          className="px-2 text-white hover:underline flex items-center gap-1"
          onClick={() => signOut()}
        >
          <TbLogout />
          <p>Log out of Netflix!</p>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
