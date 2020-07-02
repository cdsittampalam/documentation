---
id: Deposit & Withdraw

---

For a deposit transaction, users can add money to a whitelisted external Bitcoin address that is linked to your fund. Once added to a whitelisted address for a fund on Qredo, it is safely stored on the Qredo blockchain as a transaction allowing any custodial policies of the fund to be applied. The money in the fund is liquid and ready to be transfered to another Qredo user if required. 

To withdraw, you send money out of a fund on Qredo to an external Bitcoin address. When sent to a whitelisted address, the money becomes available on the underlying blockchain, and is no longer subject to the custody policies and ownership rights of the Qredo network. Qredo gives you the flexibility of adding money back on to the network at a later point in time. 

Any crypto and capital markets participant, such as an institution, investor, or trader, can withdraw money as part of their investment activities.

Deposit Money
-------------

The default fund and asset that you have set up includes a deposit address, which is the Bitcoin wallet address that is linked to a Qredo fund. However, any 
fund that you create is linked to a deposit address. Details on deposit addresses appear in both asset and ledger view. 

## View Deposit Addresses

1. Access the Holdings page.
2. Click the Asset view or Ledger view icons:

   ![coins](/doc-images/coins.png) 

   ![ledger](/doc-images/ledger.png) 

3. In the TX ledger, click the **Addresses** tab. The table shows the following information on addresses:

|     |     |
| --- | --- |
| **Column Name** | **Description** |
| WALLET NAME | Name that is assigned to the wallet, which includes the name of the fund. |
| FORMAT | Format of the wallet address. For example, for a Bitcoin address, this format is P2PKH. |
| ADDRESS | The address string |

![depositaddresses](/doc-images/CopyDep.png)

### Copy Address

To check an existing deposit address in a third-party app, you can copy the address using the Copy Address function. The address is stored in your system's clipboard. For example, you may want to check the validity of the address in Blockchain explorer.

Click the **Copy** button on the address entry.

### View Transactions

You can view deposit transactions to one or more deposit funds in Qredo .

![TX](/doc-images/TXInb.png)

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

---

Withdraw Money
--------------

You set up a withdrawal transaction as a trade initiator using the web app. To confirm that you want the transaction to happen, you can authorise it through the mobile app.

### Qredo Fees

Qredo charges fees to withdraw, including the Qredo fee and the miner's fee, The Qredo fee allows the management of Qredo wallets. While the miner's fee covers the work and resources they need to generate blocks on the underlying network. You are presented with details of these fees when you confirm the transaction.While the miner and Qredo fee is fixed for any withdrawal transaction, Qredo can periodically alter these fees.

### Custodian Role

As a custodian, you can decide if a withdrawal started by a trade initiator should happen by approving or rejecting the transaction. If all custodians under the threshold of the withdrawal custody policy have approved, the transaction takes place and is recorded on the Qredo blockchain. You will only be able to sign the transaction if you are a custodian for the withdrawal policy linked to the fund of the transaction. For more details on thresholds and custody policies, refer to [Fund Administration](/docs/Fund%20Administration). 

### Create a New Address

When sending money from Qredo, you choose an existing whitelisted withdrawal address. If you have a whitelisted address, go to the steps for setting up a withdrawal transaction (see [Create a Transaction](#create-a-transaction))

If you do not have a withdrawal address, you need to create one before the transaction.

As a custodian, you can approve the withdrawal address for the transaction if it is whitelisted. However, if the address is deemed insecure, you can reject the new address (see [Approve an Address (Custodian)](#approve-an-address-custodian))

You start your action from the Asset or the Ledger view.

1. Click the Asset view or Ledger view icons:

   ![coins](/doc-images/coins.png) 

   ![ledger](/doc-images/ledger.png) 

2. Click the **New TX** button. The Select Type window shows.

![startwithdraw](/doc-images/StartWithdrawR.png)

3.  Choose the **Withdraw** option in Select Type.    
4.  Click **Continue**. The No withdrawal address box shows.    
5.  Click **Add Withdrawal Address**. The Add Withdrawal Address screen shows. 

![add withdraw](/doc-images/AddWith.png)
  
6.  Select the fund that you want to add the address to in **Source Fund**.    
7.  Choose the asset type in **Asset**.    
8.  Enter a name for the wallet in **Wallet Name**.    
9.  Type in the wallet address in **Wallet Address**.    
10.  Click **Continue**.    
11.  See Authorise an Address (Trade Initiator) below.
    
---

#### Authorise an Address (Trade Initiator)

As the initiator of the withdrawal, you confirm your decision through authorising using the phone app.

1.  Tap the notification that you received on your phone. The Withdraw screen shows details of the transaction including fees.   

![auth withdraw](/doc-images/authwithadd.png)
 
2.  To authorise, tap **Authorise**.    
3.  To reject, tap **Reject**.
    
For the action you select, you then sign in with your biometric features and 6-digit passcode, and tap confirm on the confirmation screens.

---

#### Approve an Address (Custodian)

You receive a notification as soon as the trade initiator has authorised the withdrawal. The Withdrawal Address screen on your phone asks you to approve or reject the new address. The screen also shows the following information: 

![custodian withdraw](/doc-images/cuswithadd.png)

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

In the same way as a withdrawal address, you start your action from the Asset or Ledger view.

1.  Click the **New TX** button. The Select Type window shows.
2.  Choose the **Withdraw** option in the Select Type box.   
3.  Click **Continue**. The Withdraw screen shows.

![Trusted Network Button](/doc-images/withdrawmain.png)

4.  In the From section, select the fund that you want to withdraw assets from in the **Fund** list.   
5.  Choose the asset that you want to withdraw in the **Asset** list.    
6.  Select the address that you want to send the money to in the **To** list.    
7.  Enter the amount that you want to withdraw in **Amount**.    
8.  Type in a reference number in **Reference**.    
9.  To select a date for when the withdrawal takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.    
10.  To select a precise date for when the withdrawal takes place, click **Expires On** and enter a date and time in the displayed fields.    
11.  Click **Review Withdrawal**.    

---

#### Review the Withdrawal

In the **Review Withdrawal** screen, you can see details of the withdrawal transaction. 

![withdrawmain](/doc-images/reviewwithdraw.png)

These include:

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

![Authwith](/doc-images/authwithadd.png)
   
2.  To authorise, tap **Authorise**.   
3.  To reject, tap **Reject**.
    
A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

---

#### Approve a Withdrawal

You receive a notification as soon as the trade initiator has authorised the withdrawal. The Withdrawal screen on your phone asks you to approve or reject the new transaction. The screen also shows the following information:

![ApproveDetails](/doc-images/approvewith.png)

*   type of asset and amount.
*   the name linked to the recipient address.    
*   the name of the trade initiator.   
*   the transaction reference number.   
*   the expiry date and time for approval.   

You can also view other details linked to the transaction under the Show Detail arrow including:

![WithDetails](/doc-images/withdetails.png)
    
*   the fund of the withdrawal.    
*   the destination wallet name.    
*   the alphanumeric string of the wallet address.   
*   the name, email address, and network alias of the trade initiator.   
*   details of the Qredo fee.
    
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

A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

#### Address Approvals

1.  Click 
  
    ![tick](/doc-images/tick.png) 

2.  Click the **Addresses** tab,    
3.  Click the **Pending** or **Actioned** sub-tabs.

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

The following is an example entry in the ledger entry:

![Address Approval](/doc-images/addressappr.png)

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

The following is an example entry in the approval ledger:

![Transaction Approval](/doc-images/addressappr.png)

### Transactions

You can view the transaction progress of withdrawals from Qredo in the ledger section.

1   Click (the Ledger icon)     
2.  Click the **Addresses** tab,    
3.  Click the **Pending** or **Actioned** sub-tabs.
4. Go to the TX Ledger section in the web app.
5. Access the Outbound tab.

TX Ledger shows the following details:

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a withdrawal, the column name shows as withdrawal. |
| FUND | Name of the fund for the transaction.|
| INITIATED | Trade initiator that started the transaction. |
| AMOUNT |The amount of the transaction and the type of asset.|
| REFERENCE | Reference number of the transaction. This number can be used when contacting support at Qredo. |
| RECIPIENT | Recipient of the asset. For a withdrawal, this is the name you assigned for that withdrawal. |
| EXPIRES | Expiry date of a transaction that is awaiting approval from a custodian, or authorisation from the trade initiator.|
| STATUS  | The status of the transaction as AWAITING APPROVAL or AWAITING AUTHORISATION if the custodians have not yet responded.

If the custodians have approved the transaction, the status is set to COMPLETE. If custodians have signed the transaction and it has not successfully completed (written to the blockchain) because it did not meet the thrreshold level, the status is set to THRESHOLD NOT MET. If the transaction has been rejected by all custodians, the status is set to REJECTED.



