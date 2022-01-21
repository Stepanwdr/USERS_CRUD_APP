import React from 'react';
import UsersTable from "../components/UsersTable";
import DashboardWrapper from "../components/DashboardWrapper";

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <UsersTable/>
        </DashboardWrapper>
    );
};



export default Dashboard;