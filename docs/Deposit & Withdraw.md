---
id: Deposit & Withdraw

---

Money can be added to Qredo network through a deposit transaction, and can leave the network through a withdraw transaction.

Deposit Money
-------------

For a deposit transaction, money is automatically added to a whitelisted external Bitcoin address which is linked to your fund. The default fund and asset that you have set up includes a deposit address, which is the Bitcoin wallet address that is linked to a Qredo fund. 

When money is added to a whitelisted address for a fund on Qredo, it is safely stored on the Qredo blockchain as a transaction. Once on the blockchain, it is subject to the custodial policies for the fund. The money in the fund is also liquid and ready to be transfered to another Qredo user if required. 

## View Deposit

1. Access the Holdings page.
2. Go to Asset view.
3. In the TX ledger, click the **Deposit** tab.
4. The TX ledger shows these details:

|     |     |
| --- | --- |
| **Column Name** | **Description** |
| TYPE | Type of transaction. For a deposit, the column name shows as deposit |
| FUND | Name of the fund. |
| INITIATED | Date and time of the deposit transaction |
| AMOUNT | Amount deposited and the type of asset. |
| REFERENCE | Reference number for the transaction. |
| RECIPIENT | Recipient of the deposit transaction, e.g., sent to an exchange. |
| EXPIRES | The date and time in which the deposit transaction was received at Qredo. A date and time is shown if the status of the transaction is AWAITING APPROVAL or AWAITING AUTHORISATION. |
| STATUS | The status of the transaction as AWAITING APPROVAL or AWAITING AUTHORISATION if the custodians have not responded. If the custodians have signed the transaction, the status is set to COMPLETE. However, if the custodians have signed the transaction and it has not successfully been completed, the status is set to THRESHOLD NOT MET or REJECTED. |


### Copy Address

To check an existing address in a third-part app, you can copy the address using the Copy Address function. The address is stored in your system's clipboard.

1. Access the Holdings page.
2. Go to Asset view.
3. In the TX ledger, click the **Deposit** tab.
4. Right-click a deposit entry and choose **Copy**.


When updating the deposit address, you need to choose the correct fund and asset for the deposit address. 

Once you have selected a new address, you authorise its creation to confirm that it is valid from your side. The custodians then need to approve the creation of the new address in order for a withdrawal transaction to happen.


---

Withdraw Money
--------------

To withdraw, you send money out of a fund on Qredo to a whitelisted external Bitcoin address. When sent to a whitelisted address, the money becomes available on the underlying blockchain, and is no longer subject to the custody policies and ownership rights of the Qredo network. Qredo gives you the flexibility of adding money back on to the network at a later point in time. Any crypto and capital markets participant, such as an institution, investor, or trader, can withdraw money as part of their investment activities.

You set up a withdrawal transaction as a trade initiator using the web app. To confirm that you want the transaction to happen, you can authorise it through the mobile app.

### Qredo Fees

Qredo charges fees to withdraw, including the Qredo fee and the miner's fee, The Qredo fee allows the management of Qredo wallets. While the miner's fee covers the work and resources they need to generate blocks on the underlying network. You are presented with details of these fees when you confirm the transaction.While the miner and Qredo fee is fixed for any withdrawal transaction, Qredo can periodically alter these fees.

### Custodian Role

As a custodian, you can decide if a withdrawal started by a trade initiator should happen by approving or rejecting the transaction. If all custodians under the threshold of the withdrawal custody policy have approved, the transaction takes place and is recorded on the Qredo blockchain. You will only be able to sign the transaction if you are a custodian for the withdrawal policy linked to the fund of the transaction. For more details on thresholds and custody policies, refer to [Fund Administration](/docs/Fund%20Administration). 

### Create a New Address

When sending money from Qredo, you choose an existing whitelisted withdrawal address. If you have a whitelisted address, go to the steps for setting up a withdrawal transaction (see [Create a Transaction](#create-a-transaction))

If you do not have a withdrawal address, you need to create one before the transaction.

As a custodian, you can approve the withdrawal address for the transaction if it is whitelisted. However, if the address is deemed insecure, you can reject the new address (see [Approve an Address (Custodian)](#approve-an-address-custodian))

1.  Choose the **Withdraw** option in Select Type.    
2.  Click **Continue**. The No withdrawal address box shows.    
3.  Click **Add Withdrawal Address**. The Add Withdrawal Address screen shows.   
4.  Select the fund that you want to add the address to in **Source Fund**.    
5.  Choose the asset type in **Asset**.    
6.  Enter a name for the wallet in **Wallet Name**.    
7.  Type in the wallet address in **Wallet Address**.    
8.  Click **Continue**.    
9.  See Authorise an Address (Trade Initiator) below.
    
---

#### Authorise an Address (Trade Initiator)

As the initiator of the withdrawal, you authorise the creation of a new withdrawal address which confirms your decision using the phone app.

1.  Tap the notification that you received on your phone. The Withdraw screen shows details of the transaction including fees.    
2.  To authorise, tap **Authorise**.    
3.  To reject, tap **Reject**.
    
For the action you select, you then sign in with your biometric features and 6-digit passcode, and tap confirm on the confirmation screens.

---

#### Approve an Address (Custodian)

You receive a notification as soon as the trade initiator has authorised the withdrawal. The Withdrawal Address screen on your phone asks you to approve or reject the new address. The screen also shows the following information: 

*   name of the wallet address.
*   the fund of the withdrawal address.   
*   the name of the asset.    
*   the name of the trade initiator.    
*   the expiry time and date of the request.

You can also view other details of the withdrawal address including:
    
*   the alphanumeric string of the address    
*   details of the trade initiator (including email address and alias).    
*   the date in which the address creation was initiated
   
    
1. Tap on the notification on your phone. The Withdrawal screen the appears asking you to approve or reject the new address. 
2.  Click **Show Details** to view more details of the transaction.
3.  To approve, tap **Approve**.    
4.  To reject, tap **Reject**.    

For the action you select, you then sign in with your biometric features and 6-digit passcode, and tap confirm in the confirmation screens.

---

### Create a Transaction

For withdrawing money, the Qredo app consists of a wizard that lets you withdraw a specific amount of an asset from a fund. There needs to be a destination Bitcoin address in which to add the money to. You must ensure that you enter the correct asset, amount, address, and fund for the withdrawal.

You also set the date and time or number of days for custodian approval, according to the length of your approval process.

You launch the withdrawal process from either the Transaction Ledger or the Asset level.

1.  Choose the **Withdraw** option in the Select Type box.   
2.  Click **Continue**. The Withdraw screen shows.
3.  In the From section, select the fund that you want to withdraw assets from in the **Fund** list.   
4.  Choose the asset that you want to withdraw in the **Asset** list.    
5.  Select the address that you want to send the money to in the **To** list.    
6.  Enter the amount that you want to withdraw in **Amount**.    
7.  Type in a reference number in **Reference**.    
8.  To select a date for when the withdrawal takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.    
9.  To select a precise date for when the withdrawal takes place, click **Expires On** and enter a date and time in the displayed fields.    
10.  Click **Review Withdrawal**.    

---

#### Review the Withdrawal

In the **Review Withdrawal** screen, you can see details of the withdrawal transaction. These include:

*   the amount to withdraw    
*   the source fund    
*   the transaction reference number    
*   the estimated withdrawal fee
    

Details of the withdrawal fees is shown when you click the question mark icon. This includes:

*   Qredo fees for the settlement.    
*   Miner fees that cover the work and resources they need to generate blocks on the underlying network.    

1.  To see details of fees, click the question mark icon.    
2.  To start the withdrawal, click **Initiate Withdrawal**. You are then prompted to check your phone app.  
3. To return to the previous screen, click **Back**.

Once authorised, the custodian can also approve or reject the transaction.

---

#### Authorise the Withdrawal

Once authorised, you can view its details including the fees that are charged on the transaction.

1.  Tap on the notification that you received on your phone. The Withdraw screen shows with details of the transaction including fees.    
2.  To authorise, tap **Authorise**.   
3.  To reject, tap **Reject** (see Reject a Transaction).
    
A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

---

#### Approve a Withdrawal

You receive a notification as soon as the trade initiator has authorised the withdrawal. The Withdrawal screen on your phone asks you to approve or reject the new transaction. The screen also shows the following information:

*   type of asset and amount.
*   the name linked to the recipient address.    
*   the name of the trade initiator.   
*   the transaction reference number.   
*   the expiry date and time for approval.   

You can also view other details linked to the transaction under the Show Detail arrow including:
    
*   the fund of the withdrawal.    
*   the destination wallet name.    
*   the alphanumeric string of the wallet address.   
*   the name, email address, and network alias of the trade initiator.   
*   details of the Qredo fee
    
The Qredo fee allows the management of Qredo wallets. There is also the miner's fee that covers the work and resources they need to generate blocks on the underlying network.

The miner and Qredo fee is fixed for every transaction. Qredo periodically change these fixed fees.

---

#### Steps

1.  Tap on the notification on your phone. The Withdrawal screen shows.    
2.  Click **Show Details** to view more details of the transaction.
3.  To approve, tap **Approve**.    
4.  To reject, tap **Reject**.
    
For the action you select, you sign in with your biometric features and 6-digit passcode, and tap confirm in the confirmation screens.

---

### Track Progress

As the trade initiator, you can check the approval progress for address creation and transactions. Both addresses and transactions require approval from custodians.

Go to the Approvals section in the web app.

A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

#### Address Approvals

1.  Click the **Addresses** tab,    
2.  Click the **Pending** or **Actioned** sub-tabs.

The Pending sub tab shows pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| NAME | Name assigned to the address. |
| FUND | Name of the fund. |
| ASSET | Type of asset, e.g., Bitcoin. |
| ADDRESS | Address that has been created. |
| ACTIONED | Date and time in which the approval request was sent. |
| STATUS | Status of the approval as “awaiting confirmation”. |


The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the address approval was actioned. There are two states in the ACTIONED column. These include:

*   AUTHORISED   
*   IGNORED

---
    
#### Transaction Approvals

1.  Click the **Transactions** tab,   
2.  Click the **Pending** or **Actioned** sub-tabs.

The pending subtab shows pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a withdrawal, the column name shows as withdrawal. |
| AMOUNT | The amount of the transaction and the type of asset. |
| RECIPIENT | Recipient of the asset. For a withdrawal, the recipient is the name you assigned for that withdrawal. |
| STATUS | The status shows as “Awaiting Authorisation”. |
| ACTIONED | The date and time in which the transaction was created. |


The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the address approval was actioned. There are two states in the ACTIONED column. These include:

*   AUTHORISED   
*   IGNORED