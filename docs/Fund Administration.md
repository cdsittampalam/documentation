---
id: Fund Administration

---

As the user with the role of Account Owner, you have complete control over funds. You can view information on funds and transactions, and create funds to use on the Qredo Network. A fund in Qredo is a financial vehicle in your account that lets you organise all assets for use in transfer, deposit, and withdrawal transactions. A fund is also associated with custody policies where custodians govern the funds.

A default fund is created for you that helps you understand how a fund works before you create one or funds for trading. There is also a deposit address on the fund for receiving money.

Enterprise customers in future versions will be allowed to add multiple users and configure roles and permissions on each fund.

Any type of user can create funds in order to manage assets. The following are examples:

*   **Institutions** These users, typically in large banks, can create funds for investment where custodians can accept or reject transactions made by the investing institution.
*   **Custody Provider** A custody provider can create a fund and seek other financial stakeholders to approve or reject transactions.
*   **Traders** Traders can create transactions once they have created the funds.

Summary of Steps
----------------

* To familiarise yourself with the main web page on funds, you can [view the Holdings page](#view-the-holdings-page).
* To find out how a fund works, you can [view Fund One](#view-fund-one) to see different parts of a fund.
* Fund One contains a default asset of Bitcoin Testnet. However, you can [change the default settings](#change-default-settings)
* If you are familiar with funds in Qredo, you can do the steps in the [create a fund wizard](#create-a-fund-wizard)

View the Holdings Page
----------------------

The Holdings page lists the funds. These include one or more default funds, and any funds you have created. Funds that exist in the Holdings page can be organised according to assets as part of a portfolio strategy.

If you are using the Qredo app for the first time, Fund One appears.

From any of the main pages, click the Asset icon:

![Account](/doc-images/coins.png)

The Holdings page consists of the summary view that shows basic information on the funds.

![Fund One in Default](/doc-images/HoldingsA.png)

The page also allows you to view details on the transactions and the custody policies of the fund.

![All Transactions](/doc-images/AllTransactions3.png)


View Fund One
-------------

1. From the Holdings page, click the Fund One menu item.
2. To view summary details, observe the [Summary info](#summary) section.
3. To see Membership & Permissions information, click the [Membership & Permissions](#membership--permissions) tab.
4. To see custody policy information, click the [Custody](#custody) tab.

If you have changed your default settings to include Bitcoin for Fund One and Bitcoin Testnet for Fund Two, you will see 2 default funds in the Holdings page.

### Summary

The summary section has basic information on the fund:

*   The Fund ID to help differentiate funds with similar names and descriptions.
*   The type of asset in the fund as Bitcoin 
*   The name of the fund as "Fund One".
*   A brief description about the fund.

![summary](/doc-images/4summaryinfo.png)

:::info
From the Summary section, a link also exists to the page of the asset.
![assetlink](/doc-images/assetlink.png)

:::

### Membership & Permissions

The Membership & Permissions section shows your name as a fund member with the permission of owner. The permission of owner means that you have control over the assets and the custody policies of the fund. As the fund member, you can set custody policies to withdraw and transfer funds, view and use deposit addresses, and perform the operations of withdrawal and transfer. The fund automatically includes a deposit address for receiving funds.

![fundmembership](/doc-images/fundperms.png)

### Custody

The Custody section shows the custody policies of a fund. A custody policy determines the custodians that can sign a transaction, and whose signatures are needed to allow the movement of money in transfers and withdrawals. Each nominated custodian has a permission for either transfer or withdrawal, or for both actions. However, in Fund One the account owner is the custodian.

As a custody provider accepting or rejecting transactions on behalf of an investing fund owner, the custody policy settings within a fund are particularly important. For example, depending on the type of investment, transactions within some funds may require more signatures than others.

#### Threshold

A policy also includes a threshold that has the minimum number of custodian signatures out of the total number for a transaction to happen.

Within the Custody section, you can also click the Withdrawal Policy and TX Policy tabs.

#### Withdrawal Policy and TX Policy Tabs

The Withdrawal and TX tabs include custody policies comprising of custodians and the associated threshold levels for withdrawals and transfers. Withdrawals and transfers can have different custodians and threshold levels.

In the example of Fund A, Bob, Dave, and Alice are custodians in a fund. However, not all of them are custodians for both policies. Each policy contains a set threshold level.

![Fund A](/doc-images/ManagingFundA.png)

For Fund One, there is only one custodian and a threshold policy of 1/1 for both withdrawals and transfers.

:::info
When you create a fund, you can assign any number of custodians for withdrawals and transfers.
:::

![custody fund](/doc-images/Custodyinfo3.png)

### View Transactions & Addresses

When you use Fund One, you will be able to view a list of transactions with the deposit and withdrawal addresses for each transaction. These transactions have
already happened in the past and have been approved. The balances you see can help you decide on moving money via withdrawal and transactions.

:::info
For details on moving money, refer to [Deposit & Withdraw](/docs/Deposit%20&%20Withdraw) and [Creating Transactions](/docs/Creating%20Transactions).
:::

![Transaction view](/doc-images/AllTransactions2.png)

If you use a default fund, you can also set up multiple withdrawal addresses.

1. Click on the asset icon under the Fund One entry.
2. Click **Transactions** to view the transactions.
3. Click **Addresses** and the respective subtabs for deposits and withdrawals.

Change Default Settings
-----------------------

You can set Fund One to include Bitcoin instead of Bitcoin Testnet as the default asset. When you change the asset, Bitcoin Testnet is set as the asset for the other default fund, Fund Two.

This feature is especially useful for users that are likely to be quickly receiving money in to their default fund, and do not need to set up test transactions.

Future versions of Qredo will have other currencies available in funds.

![custody fund](/doc-images/changedefaultsonsummaryR.png)

1. Ensure that Fund One and any other funds show under the Summary heading.
2. Click **Change Defaults.** The Default Funds screen appears.   
3. Select Fund One in **For incoming Bitcoin BTC transfers.**
4. Select Fund Two in **For incoming Bitcoin Testnet transfers**. The button shows as **Updated**, and Fund One now contains Bitcoin.
5. Click **Done** after the confirmation message.

Create a Fund Wizard
--------------------

The Create a Fund wizard takes you through the steps for creating a fund. Each fund you create consists of assets. You can also set the same or different custodians for withdrawal and transfer policies.

When you select custodians, you can also choose the threshold level.

You can repeat the steps to create multiple funds differentiated by the asset type and/or group of custodians.

:::info
More details on how custodians and thresholds work is provided in [Behaviours](/docs/Qredo%20Network#behaviours) section of the Qredo Network Overview page.
:::

1. From the Summary section in the Holdings page, click the Plus icon or **Create New Fund**.

![address](/doc-images/startwiz.png)

2. Enter [basic details](#basic-details).
3. Fill in details on [fund membership and permissions](#fund-membership-and-permissions).
4. Choose [transfer policy custodians](#transfer-policy-custodians).
5. Select [withdrawal policy custodians](#withdrawal-policy-custodians).
6. [Review Details](#review-details)

### Basic Details

![create fund](/doc-images/createfund1.png)

Entering name, description, and a theme enables your fund to be identified on the Holdings page. When setting an asset type, you should ensure that users who are counterparties to a transfer on your Qredo Network have access to the asset of the fund.

1.  Fill in the name of the fund in **Fund Name.**
2.  Enter details to describe the fund in **Description.**
3.  Choose a theme that shows the fund in the Summary section of the Holdings page.
4.  Select an asset from **Assets.**
5.  Click **Continue**.

The second page of the wizard shows covering membership and permissions.

### Fund Membership and Permissions

![create fund](/doc-images/memship.png)

1.  Read the notice on membership and permissions. This indicates that only one member is available for the fund, and that further enhancements are coming soon.
2.  Observe your name as the fund member and click **Continue.**

The third page of the wizard shows covering transfer policy custodians.

### Transfer Policy Custodians

![3createfund](/doc-images/fund3create.png)

1.  Observe the notice indicating that a custodian must exist from the trusted network (see [Invite Trusted Parties](/docs/Invite%20Trusted%20Parties)).  Click **Continue**.
3.  In the **Add custodians**, enter and pick a custodian from the list using name, email address, or Network Alias.
4.  For each custodian, choose a threshold in the **Threshold** list.
5.  Click **Continue**.

### Withdrawal Policy Custodians

1.  Observe the notice indicating that a custodian must exist from the trusted network (see [Invite Trusted Parties](/docs/Invite%20Trusted%20Parties)).
2.  Click **Review Fund Details**.
3.  Observe your name as the fund member and click **Continue**.
4.  In **Add custodians**, enter and pick a custodian from the list using name, email address, or Network Alias.
5.  For each custodian, choose a threshold in the **Threshold** list.
6.  Click **Continue**.

### Review Details

You can review the details of the selected custodians for the withdrawal and transfer policies. You can also review the name, description, and look-and-feel of the fund policy on the Summary page.

1.  To change any of the fund details, click **Back** to return to the previous wizard screen. Clicking **Back** again moves to previous screens.
2.  Click **Confirm and Create Fund**.
