---
id: Creating Transactions
---

Overview
--------

Any trade initiator, such as an institution, investor, or trader can transfer money to another Qredo user. As a custodian, you can approve or reject the transfer transaction. For example, you may reject the transfer, if you feel that the counterparty is not suitable to hold the money.

Transfer Fees
-------------

Qredo charges 1 basis point, or 0.01%, of the amount transferred.

Trade Initiator Steps
---------------------

The steps for withdrawing money for the trade initiator are as follows:

*   Perform the steps for the transfer wizard (see [Transfer Money Wizard](https://qredo.atlassian.net/wiki/spaces/RW/pages/113446317/Transfer+Money+Wizard)).
    
*   View the progress of approvals in the Approvals ledger (see [View Transfer Approval Progress](https://qredo.atlassian.net/wiki/spaces/RW/pages/113446684/View+Transfer+Approval+Progress) ).
    
*   Check approved transactions in the TX Ledger (see [View Transfer Transaction Progress](https://qredo.atlassian.net/wiki/spaces/RW/pages/113446483/View+Transfer+Transaction+Progress) ).
    
*   Resend requests for a transfer (see [https://qredo.atlassian.net/wiki/spaces/QD/pages/113447036/Resend+Custodian+Approval+Requests+for+a+Transfer](https://qredo.atlassian.net/wiki/spaces/QD/pages/113447036/Resend+Custodian+Approval+Requests+for+a+Transfer) ).
    
*   Reissue a new transfer transaction (see [https://qredo.atlassian.net/wiki/spaces/QD/pages/113447115/Reissue+a+New+Transfer+Transaction](https://qredo.atlassian.net/wiki/spaces/QD/pages/113447115/Reissue+a+New+Transfer+Transaction) )
    

A transfer transaction can only be sent to a recipient if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

Custodian Steps
---------------

You do the steps for approval (see [Approve the Transfer Transaction as the Custodian](https://qredo.atlassian.net/wiki/spaces/RW/pages/113446870/Approve+the+Transfer+Transaction+as+the+Custodian))

Transfer Permissions
--------------------

As a fund owner and member, you need to have the permission to transfer money from Qredo. This permission is shown in the **Permissions** tab on the Settings section of your account.

Learn
-----

[Administer Funds](https://qredo.atlassian.net/wiki/spaces/QD/pages/81723458/Administer+Funds)

[null/pages/createpage.action?spaceKey=QD&title=Security&linkCreation=true&fromPageId=113446239](null/pages/createpage.action?spaceKey=QD&title=Security&linkCreation=true&fromPageId=113446239)

Transfer Money Wizard
---------------------

For transferring money, the Qredo app consists of a wizard that lets you transfer a specific amount to a Qredo user. You must ensure that you enter the correct asset, amount, counterparty, and fund for the transfer.

You also set the date and time or number of days for custodian approval, according to the length of your approval process.

These are the steps for transferring money:

1.  Launch the transfer wizard
    
2.  Complete the transfer screen
    
3.  Review the transfer
    
4.  Authorise the transaction
    
5.  Custodian approval of the transfer (see [Approve the Transfer Transaction as the Custodian](https://qredo.atlassian.net/wiki/spaces/RW/pages/113446870/Approve+the+Transfer+Transaction+as+the+Custodian) )
    

Launch the Transfer Wizard
--------------------------

You launch the transfer process from either the Transaction Ledger or the Asset level.

1.  Choose the **Transfer** option in the Select Type box.
    
2.  Click **Continue**. The Transfer screen shows.
    

Complete the Transfer Screen
----------------------------

1.  In the From section, select the fund that you want to transfer assets to a counterparty in the **Fund** list.
    
2.  Choose the asset that you want to transfer in the **Asset** list.
    
3.  Enter details of the user that you want to transfer the money to by typing either their name, email address, or network alias in the **To** list.
    
4.  Enter the sum of money that you want to withdraw in **Amount**.
    
5.  Type in a reference number in **Reference**.
    
6.  To select a date for when the transfer takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.
    
7.  To select a precise date for when the transfer takes place, click **Expires On** and enter a date and time in the displayed fields.
    
8.  Click **Review Transfer**.
    

Review the Transfer
-------------------

In the **Review Transfer** screen, you can see details of the transfer transaction. These include:

*   the amount to transfer
    
*   the source fund
    
*   the asset
    
*   the transaction reference number
    
*   the expiry date and time
    
*   the estimated transfer fee
    
*   balance after the transfer
    

There is also details of the recipient including their name and account number, and your details as the trade initiator.

1.  To start the transfer, click **Initiate Transfer**. You are then prompted to check your phone app.
    

To return to the previous screen, click **Back**.

Authorise the Transaction as the Initiator
------------------------------------------

Once authorised, you can view its details including the fees that are charged on the transaction.

1.  Tap on the notification that you received on your phone. The Transfer screen shows with details of the transaction including fees.
    
2.  To authorise, tap **Authorise**. (see Confirm Authorisation).
    
3.  To reject, tap **Reject** (see Reject a Transaction).
    

### Confirm Authorisation

1.  Sign in with your biometric features.
    
2.  Enter your 6-digit PIN.
    
3.  In the Confirm Authorisation screen, tap **Confirm**. The Transfer Authorised screen appears. Closing the screen shows that the transaction has been authorised in the Transaction screen.
    

### Reject a Transaction

In the Confirm Rejection screen, tap **Confirm**. The Transaction Rejected screen appears. Closing the screen shows that the confirmation has been rejected in the Rejection screen.

Custodian Approval
------------------

As the custodian linked to the fund policy, you receive a notification on your mobile app inviting you to approve the transfer transaction. You get the notification as soon as the initiator has authorised the transaction.

1.  Tap on the notification on your phone. The Transfer screen shows.
    
2.  To approve, tap **Approve** (see Confirm Approval).
    
3.  To reject, tap **Reject** (see Reject a Transaction).
    

### Confirm Approval

1.  Sign in with your biometric features.
    
2.  Sign in with your 6-digit PIN.
    
3.  In the Confirm Approve screen, tap **Confirm**. The Transfer Approved screen shows.
    
4.  Tap **Close.** The Custody screen shows the approval as Actioned.
    

Reject the Transaction
----------------------

If you do not want the initiator to transfer money, you can reject the transaction.

1.  Tap **Reject** in the Transfer screen.
    
2.  In the Confirm Rejection screen, tap **Confirm**. The Transfer Rejected screen shows.
    
3.  Tap **Close**. The Custody screen shows the transaction as Actioned.
    

Custodian Approval
------------------

As the custodian linked to the fund policy, you receive a notification on your mobile app inviting you to approve the transfer transaction. You get the notification as soon as the initiator has authorised the transaction.

1.  Tap on the notification on your phone. The Transfer screen shows.
    
2.  To approve, tap **Approve** (see Confirm Approval).
    
3.  To reject, tap **Reject** (see Reject a Transaction).
    

### Confirm Approval

1.  Sign in with your biometric features.
    
2.  Sign in with your 6-digit PIN.
    
3.  In the Confirm Approve screen, tap **Confirm**. The Transfer Approved screen shows.
    
4.  Tap **Close.** The Custody screen shows the approval as Actioned.
    

Reject the Transaction
----------------------

If you do not want the initiator to transfer money, you can reject the transaction.

1.  Tap **Reject** in the Transfer screen.
    
2.  In the Confirm Rejection screen, tap **Confirm**. The Transfer Rejected screen shows.
    
3.  Tap **Close**. The Custody screen shows the transaction as Actioned.
    

You can check the approval progress for transfer transactions that you created which require approval from custodians.

Go to the Approvals section in the web app.

Viewing Transfer Approval Progress
----------------------------------

1.  Click the **Transactions** tab,
    
2.  Click the **Pending** or **Actioned** sub-tabs.
    

### Pending

The pending subtab shows pending approvals.

|  ---  | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a transfer, the column name shows as transfer. |
| AMOUNT | The amount of the transaction and the type of asset. |
| RECIPIENT | Recipient of the asset. For a withdrawal, the recipient is the name you assigned for that transfer. |
| STATUS | The status shows as “Awaiting Authorisation”. |
| ACTIONED | The date and time in which the transaction was created. |

### Actioned

The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the address approval was actioned. There are two states in the ACTIONED column. These include:

*   AUTHORISED
    
*   IGNORED
    

You can view the transaction progress of transfers from Qredo in the TX Ledger section.

1.  Go to the **TX Ledger** section in the web app.
    
2.  Access the **Outbound** tab.
    

View Transfer Progress
----------------------

TX Ledger shows the following details:

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a transfer, the column name shows as transfer. |
| FUND | Name of the fund. |
| INITIATED | Date and time in which the transfer transaction was started. |
| AMOUNT | Amount for transfer and the type of asset. |
| REFERENCE | Reference number for the transaction. |
| RECIPIENT | Label added to the transfer transaction, e.g., sent to an exchange. |
| EXPIRES | The date and time in which the transfer transaction needs to happen. A date and time is shown if the status of the transaction is AWAITING APPROVAL or AWAITING AUTHORISATION. |
| STATUS | The status of the transaction as AWAITING APPROVAL or AWAITING AUTHORISATION if the custodians have not responded. If the custodians have signed the transaction, the status is set to COMPLETE. However, if the custodians have signed the transaction and it has not successfully been completed, the status is set to THRESHOLD NOT MET or REJECTED. |