---
id: Deposit & Withdraw

---

For a deposit transaction, users can add money to a whitelisted cryptocurrency address that is linked to your fund. Once added, the money is safely stored on the Qredo blockchain as a transaction and is subject to the custodial policies of its associated fund. The Qredo Network ensure that deposited money remains liquid, and is ready to be transferred to another Qredo user if needed.

For a withdrawal transaction, you send money out of a fund on Qredo to an external cryptocurrency address. When sent to a whitelisted address, the money is no longer subject to the custody policies and ownership rights of the Qredo Network. Qredo gives you the flexibility of adding money back on to the network at a later point in time.

:::info
When recorded on the Qredo blockchain, a transaction is always linked to the underlying blockchain.
:::

Summary of Steps
----------------

- For funds that are deposited, you can 
  - [view deposit addresses]()
  - [copy an existing address]()
  - [view deposit transactions]()
- As the trade initiator, you can [create a withdrawal address]()
- As the trade initiator, you can [create a transfer]()
- As the trade initiator, you can [track progress]()in different ways

A custodian that is nominated can [approve a transaction]() 

Deposit Money
-------------

The default fund and asset that you have set up includes a deposit address, which is the cryptocurrency wallet address that is linked to a Qredo fund. However, any
fund that you create is linked to a deposit address. The address is securely created using the MPC protocol. Details on deposit addresses appear in both Asset and Ledger view.

You are notified when money arrives at your address via an email.

### View Deposit Addresses

You view deposit addresses from Asset view by clicking either the Asset icon:

![coins](/doc-images/coins.png)

The following shows address entries in Asset view.

|     |     |
| --- | --- |
| **Column Name** | **Description** |
| WALLET NAME | Name that is assigned to the wallet, which includes the name of the fund. |
| FORMAT | Format of the wallet address. For example, for a Bitcoin address, this format is P2PKH. |
| ADDRESS | The address string. |

![depositaddresses](/doc-images/CopyDep.png)

### Copy Address

To ensure that a deposit address is valid, you can copy the address using the Copy Address function before adding it to a third-party application. When copied, the address is stored in your system's clipboard. For example, you can copy an address before adding to Blockchain explorer.

Click the **Copy** button on the address entry.

### View Transactions

In Ledger view, you can see deposit transactions to one or more funds that you are the owner of. All deposit transactions are listed in the Inbound tab.

![TX](/doc-images/TXibd.png)

|     |     |
| --- | --- |
| **Column Name** | **Description** |
| TYPE | Type of transaction. For a deposit, the column name shows as deposit |
| RECEIVED | Date and time in which the deposit transaction was received. |
| TX | Amount deposited in to the account. |
| REFERENCE | Reference number for the deposit transaction. |
| SENDER | Name of the sender. |

Withdraw Money
--------------

You set up a withdrawal transaction as a trade initiator using the web app. To confirm that you want the transaction to happen, you can authorise it through the mobile app.

### Blockchain Miner's Fee

Qredo charges fees to withdraw, which includes the Blockchain miner's fee, The fee covers the work and resources they need to generate blocks on the underlying network. You are presented with details of these fees when you add details of the transaction, and when you review it. While the miner's Blockchain fee is fixed for any withdrawal transaction, Qredo can periodically alter these fees.

### Custodian Role

As a custodian, you can decide if a withdrawal started by a trade initiator should happen by approving or rejecting the transaction. If all custodians under the threshold of the withdrawal custody policy have approved, the transaction takes place and is recorded on the Qredo blockchain. You will only be able to sign the transaction if you are a custodian for the withdrawal policy linked to the fund of the transaction. For more details on thresholds and custody policies, refer to [Fund Administration](/docs/Fund%20Administration).

### Create New Address

If you do not have a withdrawal address, you need to create one before the transaction. A fund must contain a withdrawal address for a transaction to happen. Each asset within a fund can have a different withdrawal address.

If you have a whitelisted address, go to the steps for setting up a withdrawal transaction (see [Create a Transaction](#create-a-transaction))

You start your action from either the Asset view or Ledger view.

#### Steps

1. Click the **New TX** button. The Select Type window shows.

![startwithdraw](/doc-images/StartWithdrawR.png)

2.  Choose the **Withdraw** option in Select Type.    
3.  Click **Continue**. The Withdraw screen shows.  
4.  To set up a withdraw address on the fund, choose a fund from the **Fund** list and click the **Add Withdrawal Address** button. The Add Withdrawal Address screen shows.

![add withdrawal add](/doc-images/addwithadd.png)

5.  To set up a withdraw address on an asset, choose an asset from the **Asset** list and click the **Add Withdrawal Address** button. The same screen appears.
6.  In the Add Withdrawal Address screen, select the fund that you want to add the address to in **Source Fund**.    
7.  Choose the asset type in **Asset**.    
7.  Enter a name for the wallet in **Wallet Name**.    
8.  Type in the wallet address in **Wallet Address**.    
9.  Click **Continue**. See Authorise an Address (Trade Initiator) below.

#### Authorise Address (Trade Initiator)

As the initiator of the withdrawal, you confirm your decision by authorising using the phone app.

1.  Tap the notification that you received on your phone. The Withdraw Address screen shows details of the transaction including fees.   

![auth withdraw](/doc-images/AuthWith.png)

*   name of the wallet address.
*   the fund of the withdrawal address.   
*   the name of the asset.    
*   the name of the trade initiator.    
*   the expiry time and date of the request.

You can also view other details of the withdrawal address including:

*   the alphanumeric string of the address.   
*   details of the trade initiator (including email address and alias).    
*   the date in which the address creation was initiated.

2.  To authorise, tap **Authorise**.    
3.  To reject, tap **Reject**.

For the action you select, you then sign in with your biometric features and 6-digit PIN, and tap confirm on the confirmation screens.

### Create Transaction

For withdrawing money, the Qredo app consists of a wizard that lets you withdraw a specific amount of an asset from a fund. There needs to be a destination cryptocurrency address in which to add the money to. You must ensure that you enter the correct asset, amount, address, and fund for the withdrawal.

You also set the date and time or number of days for custodian approval, according to the length of your approval process.

In the same way as a withdrawal address, you start your action from the Asset view or Ledger view.

#### Steps

1.  Click the **New TX** button. The Select Type window shows.
2.  Choose the **Withdraw** option in the Select Type box.   
3.  Click **Continue**. The Withdraw screen shows, and includes a scrollbar that lets you scroll down to other options.

![Withdraw main](/doc-images/withdrawmain.png)

4.  In the From section, select the fund that you want to withdraw assets from in the **Fund** list.   
5.  Choose the asset that you want to withdraw in the **Asset** list.    
6.  Select the address that you want to send the money to in the **To** list.    
7.  Enter the amount that you want to withdraw in **Amount**. The Blockchain Miner's fee and total withdrawal cost appears.   
8.  Type in a reference number in **Reference**.    
9.  To select a date for when the withdrawal takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.    
10.  To select a precise date for when the withdrawal takes place, click **Expires On** and enter a date and time in the displayed fields.    
11.  Click **Review Withdrawal**.    

#### Review Withdrawal

In the **Review Withdrawal** screen, you can see details of the withdrawal transaction.

![withdrawmain](/doc-images/reviewwithdraw1.png)

These include:

*   Asset and amount to withdraw    
*   Source fund    
*   Transaction reference number
*   Expiry date and time information    
*   Blockchain miner's fee
*   Total withdrawal cost (including the amount to withdraw and the miner's fee)
*   Balance after the total withdrawal cost is deducted
*   From details:
     * Name of the trade initiator
     * Email address of the trade initiator
     * Network alias of the trade initiator
*   To details:
     * Withdraw wallet address   

1. To start the withdrawal, click **Initiate Withdrawal**. You are then prompted to check your phone app.  
2. To return to the previous screen, click **Back**.

Once authorised, the custodian can also approve or reject the transaction.

---

#### Authorise Withdrawal

Before authorising, you can view its details including the fees that are charged on the transaction.

1.  Tap the notification that you received on your phone. The Withdraw screen shows with details of the transaction including fees.

![Authwith](/doc-images/authwithd.png)

2.  To authorise, tap **Authorise**.   
3.  To reject, tap **Reject**.

A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

#### Approve Withdrawal

You receive a notification as soon as the trade initiator has authorised the withdrawal. The Withdrawal screen on your phone asks you to approve or reject the new transaction. The screen also shows the following information:

![ApproveDetails](/doc-images/apprwith.png)

*   type of asset and amount.
*   the name linked to the recipient address.    
*   the name of the trade initiator.   
*   the transaction reference number.   
*   the expiry date and time for approval.   

You can also view other details linked to the transaction under the Show Details arrow including:

*   the fund of the withdrawal.    
*   the destination wallet name.    
*   the alphanumeric string of the wallet address.   
*   the name, email address, and network alias of the trade initiator.   
*   details of the Qredo fee.

#### Steps

1.  Tap the notification on your phone. The Withdrawal screen shows.    
2.  Click **Show Details** to view more details of the transaction.
3.  To approve, tap **Approve**.    
4.  To reject, tap **Reject**.

For the action you select, you sign in with your biometric features and 6-digit passcode, and tap confirm in the confirmation screens.

### Track Progress

As the trade initiator, you can check the approval progress for address creation and transactions. Both addresses and transactions require approval from custodians.

A withdrawal transaction can only happen if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

You can view approvals from the Approval view, which appears by clicking the Approvals icon:

![tick](/doc-images/tick.png)

These include details of:

* withdrawal address approvals
* transactions approvals that cover those from the trade initiator and one or more custodians
* custodian approvals specifically for the fund of the transaction

#### Address Approvals

1.  Click the **Addresses** tab,    
2.  Click the **Pending** or **Actioned** sub-tabs.

The Pending sub tab shows these fields and pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| NAME | Name assigned to the address. |
| FUND | Name of the fund. |
| ASSET | Type of asset, e.g., Bitcoin. |
| ADDRESS | Address that has been created. |
| REQUESTED | Date and time in which the approval request was sent. |
| STATUS | Status of the approval as “awaiting confirmation”. |


The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the address approval was actioned. There are two states in the ACTIONED column. These include:

*   APPROVED   
*   REJECTED

The following is an example entry showing a pending approval with the status of APPROVED:

![Address Approval](/doc-images/addressappr2.png)

#### Transaction Approvals

1.  Click the **Transactions** tab,   
2.  Click the **Pending** or **Actioned** tabs.

The pending tab shows these fields and pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a withdrawal, the column name shows as withdrawal. |
| AMOUNT | The amount of the transaction and the type of asset. |
| RECIPIENT | Recipient of the asset. For a withdrawal, the recipient is the name you assigned for that withdrawal. |
| STATUS | The status shows as “Awaiting Authorisation”. |
| ACTIONED | The date and time in which the transaction was created. |


The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the transaction approval was actioned. There are two states in the ACTIONED column. These include:

*   APPROVED   
*   REJECTED

The following is an example actioned entry in the Approval view with the status of APPROVED:

![Transaction Approval](/doc-images/trapr2.png)

#### Custodian Approvals

1.  Click the **Custody** tab,    
2.  Click the **Pending** or **Actioned** sub-tabs.

The pending tab shows these fields and pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| ITEM | The transaction or withdrawal item. |
| REQUESTED BY | The trade initiator that requested custodian approval. |
| REQUESTED | The time and date in which the custodian approval was actioned. |
| STATUS | The status shows as “Awaiting Approval”. |

The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the custodian approval was actioned. There are two states in the ACTIONED column. These include:

*   APPROVED   
*   REJECTED
*   EXPIRED

The following is an example actioned entry in the Approval view with the status of APPROVED:

![Transaction Approval](/doc-images/cusappr.png)

#### Transaction View (Ledger)

Transactions are presented in Ledger view which shows transactions for all funds under your account. The transactions includes both those that are pending, and those that have been written to the blockchain.

You can view the transaction progress in the Ledger view by clicking the Ledger icon,

![Ledger](/doc-images/ledger.png)

You then access the Outbound tab.

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
| STATUS  | The status of the transaction as AWAITING APPROVAL (if the custodians have not responded). The status also shows as AWAITING AUTHORISATION (if not yet authorised).

If the custodians have approved the transaction, the status is set to COMPLETE. If custodians have signed the transaction and it has not successfully completed (written to the Qredo blockchain) because it did not meet the threshold level, the status is set to THRESHOLD NOT MET. If the transaction has been rejected by all custodians, the status is set to REJECTED.

The following shows an example transaction ledger with the status set to AWAITING AUTHORISATION.

![Transaction Approval](/doc-images/outTX1.png)

#### Progress Details

For both the Approval and Ledger view, a summary screen shows details of the progress of a single transaction. Summary screen headers can show in a particular colour to represent a category:

* Transactions that are waiting appear in black and white.
* Transactions that are approved show in green.
* Transactions that are rejected appear in red.

The following shows an example summary status of a completed withdrawal:

![Withdraw Complete](/doc-images/Withconfirm.png) 

1. Click the Ledger or Approval view icon.
2. In Approval view, access the Transaction or Custody tab and click the three buttons at the end of a table row.
3. In Transaction view, click the three buttons at the end of a table row.

:::info
Clicking the downward arrow in the screen shows more details of the transaction, such as the amount of the asset and the fund.
:::
