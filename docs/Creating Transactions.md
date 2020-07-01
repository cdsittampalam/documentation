---
id: Creating Transactions
---

Transactions allow a trade initiator to transfer money to a recipient (or counterparty) within the same fund. All money during a transfer
stays on the Qredo network, and is secure on the Qredo blockchain. With assets of the Qredo network, instead of in cold storage, crypto and capital market participants
can easily keep their money liquid by transferring amounts between participants.

Future versions will allow atomic swaps that provide instant exchange of different digital assets.

### Qredo Fees

Qredo charges fees of 1 basis point, or 0.01%, of the amount transferred.

As a fund owner and member, you have the permission to transfer money from one Qredo user to another. This permission is shown in the **Permissions** tab on the Settings section of your account.

### Custodian Role

As a custodian, you can decide if a withdrawal started by a trade initiator should happen by approving or rejecting the transaction. If all custodians under the threshold of the transfer custody policy have approved, the transaction takes place and is recorded on the Qredo blockchain. You will only be able to sign the transaction if you are a custodian for the transfer policy linked to the fund of the transaction. For more details on thresholds and custody policies, refer to [Fund Administration](/docs/Fund%20Administration).
For approving a transfer (see [Approve a Transfer](#approve-a-transfer).

Create Transfer
---------------

For transferring money, the Qredo app consists of a wizard that lets you transfer a specific amount to a Qredo user. You must ensure that you enter the correct asset, amount, counterparty, and fund for the transfer.

You also set the date and time or number of days for custodian approval, according to the length of your approval process.

You launch the withdrawal process from either the Transaction Ledger or the Asset level.

1. Choose the **Transfer** option in the Select Type box.
2. Click **Continue**. The Transfer screen shows.
3. In the From section, select the fund that you want to transfer assets to a counterparty in the **Fund** list.
4.  Choose the asset that you want to transfer in the **Asset** list.
5.  Enter details of the user that you want to transfer the money to by typing either their name, email address, or network alias in the **To** list.
6.  Enter the sum of money that you want to withdraw in **Amount**.
7.  Type in a reference number in **Reference**.
8.  To select a date for when the transfer takes place, click **Expires In** and enter days, hours, and minutes in the displayed fields.
9.  To select a precise date for when the transfer takes place, click **Expires On** and enter a date and time in the displayed fields.
10.  Click **Review Transfer**.

---

### Review Transfer

In the **Review Transfer** screen, you can see details of the transfer transaction. These include:

*   the amount to transfer
*   the source fund
*   the asset
*   the transaction reference number
*   the expiry date and time
*   the estimated transfer fee
*   balance after the transfer

Details of the withdrawal fees is shown when you click the question mark icon.

---

### Start the Transfer

1. To see details of fees, click the question mark icon.
2. To start the transfer, click **Initiate Transfer**. You are then prompted to check your phone app.
2. To return to the previous screen, click **Back**.

---

### Authorise the Transfer

Once authorised, you can double-check details including the fees that are charged on the transaction.

1.  Tap on the notification that you received on your phone. The Transfer screen shows details of the transaction including fees.
2.  To authorise, tap **Authorise**.
3.  To reject, tap **Reject**.

For the action you select, you then sign in with your biometric features and 6-digit passcode, and tap confirm in the confirmation screens.

A withdrawal transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

---

Approve a Transfer
------------------

As the custodian, you receive a notification as soon as the trade initiator has authorised the transfer. The Transfer screen on your phone asks you to approve or reject the transfer. The screen also shows the following information:

*   type of asset and amount.
*   the recipient of the transfer.
*   the name of the trade initiator.
*   the transaction reference number.
*   the expiry date and time for approval.

You can also view other details linked to the transaction under the Show Detail arrow including:

*   the name, beneficiary name, email address, network alias, beneficiary, and account number of the recipient.
*   the email address and network alias of the trade initiator.
*   the date and time in which the transfer was initiated.
*   details of the Qredo fee.

### Steps

1.  Tap on the notification on your phone. The Withdrawal screen shows.
2.  Click **Show Details** to view more details of the transaction.
3.  To approve, tap **Approve**.
4.  To reject, tap **Reject**.

For the action you select, you sign in with your biometric features and 6-digit passcode, and tap confirm in the confirmation screens.

---

Track Progress
--------------

As the trade initiator, you can check the progress of the transfer. Transactions require approval from custodians.

Go to the Approvals section in the web app.

A transfer transaction can only be sent out of Qredo if it has met or has exceeded the threshold level for the number of custodian signatures. The threshold level is entered on the fund associated with the transaction.

---

### Transaction Approvals

1.  Click the **Transactions** tab,
2.  Click the **Pending** or **Actioned** sub-tabs.

The pending subtab shows pending approvals.

|     |     |
| --- | --- |
| **Column** | **Description** |
| TYPE | Type of transaction. For a transfer, the column name shows as transfer. |
| AMOUNT | The amount of the transaction and the type of asset. |
| RECIPIENT | Recipient of the asset. |
| STATUS | The status shows as “Awaiting Authorisation”. |
| ACTIONED | The date and time in which the transaction was created. |


The actioned tab shows the same column fields. However, the ACTIONED column reflects the time and date in which the transaction approval was actioned. There are two states in the ACTIONED column. These include:

*   AUTHORISED
*   IGNORED

### Transfer Progress

You can view the transaction progress of transfers from Qredo in the TX Ledger section.

1.  Go to the **TX Ledger** section in the web app.
2.  Access the **Outbound** tab.

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


