---
id: Creating Transactions
---

Transactions allow a trade initiator to transfer money to a recipient (or counterparty) within the same fund. All money during a transfer
stays on the Qredo Network, and is secure on the Qredo blockchain. Liquidity is maintained, so that money can move between participants at any time.

As a custodian, you can decide if a transfer started by a trade initiator should happen by approving or rejecting the transaction. If all custodians under the threshold of the transfer custody policy have approved, the transaction takes place and is recorded on the Qredo blockchain. You will only be able to sign the transaction if you are a custodian for the transfer policy linked to the fund. For more details on thresholds and custody policies, refer to [Fund Administration](/docs/Fund%20Administration).

Future versions will allow atomic swaps that provide instant exchange of different digital assets.

Summary of Steps
----------------

- As the trade initiator, you start by following the steps to [create a transfer](#create-transfer). These also include details of:
  - [review transfer](#review-transfer)
  - [start transfer](#start-transfer)
  - [authorise transfer](#authorise-transfer)

- As the custodian, you can [approve the transfer](#approve-transfer).

You can [track progress](#track-progress) in different ways.

Create Transfer
---------------

The Qredo app consists of a wizard that lets you transfer a specific amount to a Qredo user. You must ensure that you enter the correct asset, amount, counterparty, and fund for the transfer.

You also set the date and time or number of days for custodian approval, according to the length of your approval process.

You are also notified when a transfer transaction is complete through an email.

1.Start your action from the Asset view or Ledger view by clicking either:

![coins](/doc-images/coins.png)

![ledger](/doc-images/ledger.png)

2. Choose the **Transfer** option in the Select Type box.

![transaction](/doc-images/selecttypetrans.png)

3. Click **Continue**. The Transfer screen shows, and includes a scrollbar that lets you scroll down to other options.

![transfer](/doc-images/transfermain.png)

4. In the From section, select the fund for the transfer in the **Fund** list.
5. Choose the asset that you want to transfer in the **Asset** list.
6. Enter details of the user that you want to transfer the money to by typing their name, email address, or network alias in the **To** list.
7. Enter the sum of money that you want to transfer in **Amount**. The Qredo fee and total transfer cost appears.  
8. Type in a reference number in **Reference**.
9. To select the exact time until the transfer takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.
10. To select a precise date for when the transfer takes place, click **Expires On** and enter a date and time in the displayed fields.
11. Click **Review Transfer**.

### Review Transfer

In the **Review Transfer** screen, you can see details of the transfer transaction.

![withdrawmain](/doc-images/reviewtrans1.png)

These include:

*   Asset and amount to transfer    
*   Source fund    
*   Transaction reference number
*   Expiry date and time information    
*   Qredo transfer fee
*   Total transfer cost (including the amount to transfer and the transfer fee)
*   Balance after the total transfer cost is deducted
*   From details:
     * Name of the trade initiator
     * Email address of the trade initiator
     * Network alias of the trade initiator
*   To details:
     * Counterparty name
     * Counterparty email address
     * Counterparty network alias
     * Beneficiary details  
     * Account number     

### Start Transfer

1. To start the transfer, click **Initiate Transfer**. You are then prompted to check your Qredo Signing App.
2. To return to the previous screen, click **Back**.

When a counterparty receives money, they will receive an email notification of the transaction.

### Authorise Transfer

Once authorised, you can double-check details including the fees that are charged on the transaction.

![ledger](/doc-images/authtransfer.png)

1.  Tap on the notification that you received on your Qredo Signing App. The Transfer screen shows details of the transaction including fees.
2.  To authorise, tap **Authorise**.
3.  To reject, tap **Reject**.

For the authorise or reject action, you sign in with your biometric features and 6-digit PIN, and tap confirm in the confirmation screens.

A transfer transaction can happen if it has met or exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund linked to the transaction.

### Approve Transfer

As the custodian, you receive a notification as soon as the trade initiator has authorised the transfer. The Transfer screen on your Qredo Signing App asks you to approve or reject the transfer.

![ledger](/doc-images/apprtransfer.png)

The screen also shows the following information:

*   type of asset and amount.
*   the recipient of the transfer.
*   the name of the trade initiator.
*   the transaction reference number.
*   the expiry date and time for approval.

You can also view other details linked to the transaction under the Show Detail arrow including:

*   the name, beneficiary name, email address, network alias, and account number of the recipient.
*   the email address and network alias of the trade initiator.
*   the date and time in which the transfer was initiated.
*   details of the Qredo fee. Qredo charges a fee of 1 basis point, or 0.01%, of the amount transferred.

1.  Tap on the notification on your phone. The Transfer screen shows.
2.  Click **Show Details** to view more details of the transaction.
3.  To approve, tap **Approve**.
4.  To reject, tap **Reject**.

For the approve or reject action, you sign in with your biometric features and 6-digit PIN, and tap confirm in the confirmation screens.

Track Progress
--------------

As the trade initiator, you can check the progress of custodian approval for the transfer. These include details of transfer approvals that cover those from the trade initiator and one or more custodians. You can also view custody approvals specifically
for the fund of the transaction.

Details that can be tracked include the following:

* [transaction approvals](#transaction-approvals) that cover those from the trade initiator and one or more custodians.
* [custodian approvals](#custodian-approvals) specifically for the fund of the transaction.
* [transactions in Ledger View](#transfer-progress) for all funds under your account.
* [progress details](#progress-details) in the form of a summary screen in both Approval and Ledger view.


### Transaction Approvals

1.  Click the Approvals icon.

![tick](/doc-images/tick.png)

2.  Click the **Transactions** tab,
3.  Click the **Pending** or **Actioned** tabs.

The Pending tab shows pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a transfer, the column name shows as Transfer. |
| AMOUNT | The amount of the transfer and the type of asset. |
| RECIPIENT | Recipient of the asset. |
| STATUS | The status of the transfer which is “Awaiting Authorisation”. |
| ACTIONED | The date and time in which the transfer was created. |


The Actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the transaction approval was actioned. There are two states in the ACTIONED column. These include:

*   AUTHORISED - The transactions have been authorised by the trade initiator.
*   IGNORED - The transactions have been ignored.

![transaction](/doc-images/trapr3.png)

### Custodian Approvals

1.  From the Approvals view, click the **Custody** tab,    
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

*   APPROVED - The transaction has been approved by the custodians.
*   REJECTED - The transaction has been rejected by the custodians.
*   EXPIRED -  The time set for custodian approval has exceeded for the transaction.

The following is an example actioned entry in the Approval view with the status of APPROVED:

![Transaction Approval](/doc-images/cusappr2.png)

### Transactions View (Ledger)

You can view the transaction progress of transfers from Qredo in the TX Ledger section.

1. Click the Ledger icon.

![Ledger](/doc-images/ledger.png)

2. Click the Outbound tab.

TX Ledger shows the following details:

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a transfer, the column name shows as Transfer. |
| FUND | Name of the fund. |
| INITIATED | Date and time in which the transfer transaction started. |
| AMOUNT | Amount of the transfer and the type of asset. |
| REFERENCE | Reference number for the transfer. |
| RECIPIENT | Label added to the transfer, e.g., sent to an exchange. |
| EXPIRES | The date and time in which custodian approval was needed for a transaction to happen. A date and time is shown if the status of the transaction is AWAITING APPROVAL or AWAITING AUTHORISATION. |
| STATUS | The status of the transaction as AWAITING APPROVAL or AWAITING AUTHORISATION if the custodians have not responded. If the custodians have signed the transaction and it has met the threshold, the status is set to COMPLETE. However, if the custodians have signed the transaction and it has not successfully been completed, the status is set to THRESHOLD NOT MET or REJECTED. |

![Transaction Approval](/doc-images/outTX2.png)

### Progress Details

For both the Approval and Ledger view, a summary screen shows details of the progress of a single transfer transaction. Summary screen headers can show in a particular colour to represent a category:

* Transactions that are waiting appear in black and white.
* Transactions that are approved show in green.
* Transactions that are rejected appear in red.

The following shows an example summary status of a completed transfer:

![Transfer Complete](/doc-images/Transfercomp.png)

1. Click the Ledger or Approval view icon.
2. In Approval view, access the Transaction or Custody tab and click the three buttons at the end of a table row.
3. In Transaction view, click the three buttons at the end of a table row.

:::info
Clicking the downward arrow in the screen shows more details of the transaction, such as the amount of the asset and the fund.
:::
