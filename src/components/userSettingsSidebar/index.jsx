import React from 'react';

import './style.css'

import { ReactComponent as UserIcon } from '../../assets/sidebarsettings/user.svg';
import { ReactComponent as AddressIcon } from '../../assets/sidebarsettings/location.svg';
import { ReactComponent as OrdersIcon } from '../../assets/sidebarsettings/shopping.svg';
import { ReactComponent as WishlistIcon } from '../../assets/sidebarsettings/heart.svg';
import { ReactComponent as DownloadIcon } from '../../assets/sidebarsettings/download.svg';
import { ReactComponent as SupportIcon } from '../../assets/sidebarsettings/support.svg';
import { ReactComponent as ReportsIcon } from '../../assets/sidebarsettings/activity.svg';
import { ReactComponent as LoguotIcon } from '../../assets/sidebarsettings/logout.svg'

function UserSettingsSidebar() {
  return (
    <aside className="settSidebar">
      <h1 className="settSidebar__title">My Account</h1>
      <ul className="settSidebar__list">
        <li className="settSidebar__item">
          <UserIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Account Details</h2>
        </li>

        <li className="settSidebar__item">
          <AddressIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Address</h2>
        </li>

        <li className="settSidebar__item settSidebar__item_active">
          <OrdersIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Orders</h2>
        </li>

        <li className="settSidebar__item">
          <WishlistIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Wishlist</h2>
        </li>

        <li className="settSidebar__item">
          <ReportsIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Reports</h2>
        </li>

        <li className="settSidebar__item">
          <DownloadIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Downloads</h2>
        </li>

        <li className="settSidebar__item">
          <SupportIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Support</h2>
        </li>

      </ul>

      <button className="settSidebar__loguot">
        <LoguotIcon className="settSidebar__loguot-icon" />
        <h2 className="settSidebar__loguot-text">Loguot</h2>
      </button>
    </aside>
  )
}

export default UserSettingsSidebar;
