import React from 'react'
import CardInfo from '../../../components/CardInfo/CardInfo';
import Inbox from '../../../components/Inbox/Inbox';
import Latest from '../../../components/Latest/Latest';
import ProgessCard from '../../../components/ProgessCard/ProgessCard';
import './Dashboard.scss';
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="top-title">
                <div className="title-left">
                    <h4>OVERVIEW</h4>
                    <h2>Good Morning, Jane</h2>
                    <p>Here's what's happening with your projects today</p>
                </div>
                <div className="title-right">
                    <h3>+ New Transation</h3>
                </div>
            </div>
            <div className="items-progess">
                <ProgessCard desc="Weekly earnings" title="0.299 BTC" />
                <ProgessCard desc="Your private wallet" color="white" title="$2,150,000.00" />
            </div>
            <div className="middle-content">
                <Latest />
                <Inbox />
            </div> 
            <div className="bottom-content"> 
                <CardInfo title={'Jobs'} icon={'fas fa-briefcase'} latestIcon={'fas fa-arrow-right'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} desc={'Find your dream job'} btnTitle={'Search Jobs'} />
                <CardInfo title={'Help Center'} icon={'fas fa-info'} latestIcon={'far fa-check-square'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} desc={'Need help figuring things out?'} btnTitle={'Help Center'} />
                <CardInfo title={'Download'} icon={'fas fa-download'} latestIcon={'fas fa-download'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} desc={'Download our Free PDF and learn how to get more job leads'} btnTitle={'Download Free PDF'} />
                <CardInfo title={'Contacts'} icon={'fas fa-user-friends'} latestIcon={'fas fa-arrow-right'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} desc={'Contacts allow you to manage your company contracts'} btnTitle={'My Contacts'} />
            </div>
        </div>
    )
}

export default Dashboard
