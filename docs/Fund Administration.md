---
id: Fund Administration

---

As the user with the role of Account Owner, you have complete control over funds. You can view information on funds and transactions, and create funds to use on the Qredo network. A fund in Qredo is a financial vehicle in your account that contains all the assets for use in transfer, deposit, and withdrawal transactions. A fund is also associated with custody policies.

Any type of user can create funds in order to manage assets. The following are examples:

*   **Institutions** These users, typically in large banks, can create funds for investment where custodians can accept or reject transactions made by the investing institution.
*   **Custody Provider** A custody provider can create a fund and seek other financial stakeholders to approve or reject transactions.
*   **Traders** Traders can create transactions once they have created the funds.

---

Holdings Page
-----------------

The Holdings page lists the funds under your account. These include one or more default funds, and any funds you have created. For each fund, you can have a complete view of the transactions, addresses, and custody policies. You can also choose a fund option from the page.

You access the Holdings page by clicking the Asset icon:

![Account](/doc-images/coins.png)

The Holdings page consists of the summary section that allows you to create a fund or view attributes of a default fund.

![Fund One in Default](/doc-images/HoldingsA.png)

The page also allows you to view details on the transactions and the custody policies of the fund.

![All Transactions](/doc-images/AllTransactions3.png)

### Task Options

You can choose the following options from the page:

*   **View Fund One:** If you are a new user, you can view details of a default fund, labelled Fund One. Fund One is created for you once you have joined the Qredo Network. While Fund One is designed to help you understand how a Qredo fund works, you can also use Fund One for transactions. The system creates a deposit address for you to receive assets (see [View Fund One](#view-fund-one)).
*   **Change Default Settings:** Fund One contains Bitcoin Testnet, which allows you to familiarise yourself with Qredo and how transactions work. However, you can also include Fund Two as another default fund, where Fund One contains Bitcoin and Fund Two contains Bitcoin Testnet (see [Change Default Settings](#change-default-settings)).
*   **Create a Fund:** If you are familiar with the concepts of a Qredo fund and you just want to create funds, you can go straight to the steps for creating a fund (see [Create a Fund Wizard](#create-a-fund-wizard)).

---

View Fund One
-------------

From the Holdings page, click the FundOne menu item.

![defaultfund](/doc-images/1Fund.png)

The Summary info, Membership & Permissions and Custody sections show for Fund One.

If you have changed your default settings to include Bitcoin for Fund One and Bitcoin Testnet for Fund Two, you will see 2 default funds in the Holdings page.

### Summary

The summary section has basic information on the fund:

*   The Fund ID to help differentiate funds with similar names and descriptions
*   The type of asset in the fund as Bitcoin Testnet
*   The name of the fund as "Fund One"
*   A brief description about the fund


![summary](/doc-images/4Summaryinfo.png)

---

### Membership & Permissions

The Membership & Permissions section shows your name as a fund member with the permission of owner. The permission of owner means that you have control over the assets and the custody policies of the fund. As the fund member, you can set custody policies to withdraw and transfer funds, and perform the operations of withdrawal and transfer. The fund automatically includes a deposit address for receiving funds.

![fundmembership](/doc-images/fundperms.png)

---

### Custody

The Custody section shows the custody policies of a fund. A custody policy determines the custodians that can sign a transaction, and whose signatures are needed for transfers and/or withdrawals to occur. Each nominated custodian has a permission for either transfer or withdrawal, or for both actions. However, in Fund One the custodian is the fund owner.

As a custody provider accepting or rejecting transactions on behalf of an investing fund owner, the custody policy settings within a fund are particularly important. For example, depending on the type of investment, transactions within some funds may require more signatures than others.

#### Threshold

A policy also includes a threshold that has the minimum number of custodian signatures out of the total number for a transaction to happen.

#### Withdrawal Policy and TX Policy Tabs

The Withdrawal and TX tabs include custody policies comprising of custodians and the associated threshold levels for withdrawals and transfers. Withdrawals and transfers can have different custodians and threshold levels. For Fund One, there is only one custodian and a threshold policy of 1/1 for both withdrawals and transfers.

:::info
When you create a fund, you can assign any number of custodians for withdrawals and transfers.
:::

![custody fund](/doc-images/Custodyinfo1.png)

---

### Transactions & Addresses

When you use Fund One, you will be able to view a list of transactions with the deposit and withdrawal addresses for each transaction. These transactions have
already happened in the past and have been approved.

![Transaction view](/doc-images/AllTransactions2.png)

If you use a default fund, you can also set up multiple withdrawal addresses.

1.  Click on details of the asset under the Fund One entry.

![address](/doc-images/hldin.png)

2. Click **Transactions** to view the transactions.
3. Click **Addresses** and the respective subtabs for deposits and withdrawals.

---

Change Default Settings
-----------------------

You can set Fund One to include Bitcoin instead of Bitcoin Testnet as the default asset. When you change the asset, Bitcoin Testnet is set as the asset for the other default fund, Fund Two.

This feature is especially useful for users that are likely to be quickly receiving money in to their default fund, and do not need to set up test transactions. 

Future versions of Qredo will have other currencies available in funds.

![custody fund](/doc-images/changedefaultsonsummaryR.png)

1.  Click **Change Defaults.** The Default Funds screen appears.   
2. Select Fund One in **For incoming Bitcoin BTC transfers.**
3. Select Fund Two in **For incoming Bitcoin Testnet transfers**. The button shows as **Updated**,  
and Fund One now contains Bitcoin.
4. Click **Done** after the confirmation message.

---

Create a Fund Wizard
--------------------

The Create a Fund wizard takes you through the steps for creating a fund. Each fund you create can have the same or different asset depending on your needs. You can also set the same or different custodians for withdrawal and transfer policies. 

When you select custodians, you can also choose the Threshold level. A Threshold includes the minimum number of custodian signatures out of the total number for a transaction to happen. A higher threshold level, e.g. containing a ratio of 3/3, needs more custodian signatures for a transaction to take place. A lower threshold, e.g. containing a ratio of 1/3, needs fewer signatures for a transaction to take place.  

You can repeat the steps to create multiple funds differentiated by the asset type and/or group of custodians.

### Example

In the example of Fund A, Bob, Dave, and Alice are custodians in a fund. However, not all of them are custodians for both policies. Each policy contains a set Threshold level.

![Fund A](/doc-images/ManagingFundA.png)

---

### Custody Providers

As an investor creating funds, you will need to work closely with a custody provider in order to decide policies and threshold levels. 

---

### Start Wizard

From the Summary section in the Holdings page, click the Plus icon or **Create New Fund**.

![address](/doc-images/startwiz.png)

---

### Basic Details

Entering name, description, and a theme enables your fund to be identified on the Holdings page. When setting an asset type, you should ensure that users who are counterparties to a transfer on your Qredo network have access to the asset of the fund. 

1.  Fill in the name of the fund in **Fund Name.**
2.  Enter details to describe the fund in **Description.**
3.  Choose a theme that shows the fund in the Summary section of the Holdings page.
4.  Select an asset from **Assets.**
5.  Click **Continue**.

#### Membership and Permissions

1.  Read the notice on membership and permissions. This indicates that only one member is available for the fund, and that further enhancements are coming soon.
2.  Observe your name as the fund member and click **Continue.**

---    

### Transfer Policy Custodians

1.  Observe the notice indicating that a custodian must exist from the trusted network (see [Invite Trusted Parties](/docs/Invite%20Trusted%20Parties)).  Click **Continue**.
3.  In the **Add custodians**, enter and pick a custodian from the list using name, email address, or Network Alias.
4.  For each custodian, choose a threshold in the **Threshold** list.
5.  Click **Continue**.

---   

### Withdrawal Policy Custodians

1.  Observe the notice indicating that a custodian must exist from the trusted network (see [Invite Trusted Parties](/docs/Invite%20Trusted%20Parties)).
2.  Click **Review Fund Details**.
3.  Observe your name as the fund member and click **Continue**.
4.  In **Add custodians**, enter and pick a custodian from the list using name, email address, or Network Alias.
5.  For each custodian, choose a threshold in the **Threshold** list.
6.  Click **Continue**.

---

### Review Details

You can review the details of the selected custodians for the withdrawal and transfer policies. You can also review the name, description, and look-and-feel of the fund policy on the Summary page.

1.  To change any of the fund details, click **Back** to return to the previous wizard screen. Clicking **Back** again moves to previous screens.
2.  Click **Confirm and Create Fund**.

