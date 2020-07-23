---
id: Partner API
---

About
-----

Qredo’s Partner API enables authorized Qredo Partners to operate the Qredo Platform programmatically from their application. OMS and EMS ISVs, Exchanges and other financial service providers can create accounts, initiate transactions on behalf of users, and approve transactions where they have been ordained as a Custodian over an end user's or corporate user’s fund.

For API schema and other technical documentation, please explore our [API Reference]()documentation or [Swagger UI]().

*   Institutional-grade DeFi platform    
*   Secure your customer’s digital assets    
*   Offer MPC secured fund management    
*   Hardware security hardened network    
*   Multi-custodian signature capable    
*   Instantiate flexible governance policies    
*   Near instant digital asset delivery    
*   Eliminate counterparty risk

This document explains what information partners are going to need about Qredo’s Partner API. Qredo’s Partner API is built using the REST API.

The Partner API is still work in progress. Qredo plan to add the following in future releases:

*   Client libraries    
*   Dedicated URLs for test, production and live environments
    

Eligibility Criteria
--------------------

Qredo’s Partner program is those who are committed to building a new era in capital markets for institutional-grade decentralized financial applications. We seek partners who think about the following criteria:

*   Composability - Are you developing other applications, centralized or decentralized, that can add additional value to joint customers?   
*   Integrity - Do you value the safety of your customer’s digital assets as if they were your own digital assets?    
*   Extensibility - Is your platform extensible, so that the value chain created by joint works can be extended by other DeFi applications?
    

If so, please get in touch.

How to use it
-------------

From the Partner API you can

*   [register]() with the Partner API on the Qredo website.
*   [connect to the Partner API]() using the API key and public key authentication mechanisms.   
*   become familiar with how the API works through [API Endpoints](), [Quick-Start]() and [Reference] documentation sections.
*   use the [Swagger UI] to test the endpoints.
    
How to register
---------------

Signing up to the Partner API is available for a Qredo user from the Qredo Desktop app once they have registered. Once Qredo has granted your application to be a Partner API developer, the app allows you to generate your own API Key.

1.  Ensure that are logged in to the app as a Qredo user.
2.  Go to **Settings** > **Partner API**.  


![Billing](/doc-images/partnerapi2.png)

3. Read through the descriptions on the API and click **Apply**.
4. Fill out the form to apply for the Partner API and click **Submit.**

After a confirmation message appears, the Partner API screen shows the **Generate Key** button.

![partnerapi](/doc-images/generatekeyimage.png)

Connect to the Partner API
--------------------------

From the Partner API page, you can connect to the API using the Partner API key.

The Partner API key is needed for security reasons to ensure that only you can access specific endpoints in the Partner API. The API Key is linked to your partner developer account and provides you with permission to access any endpoint in the API through the Qredo developer portal.

All users that generate an API key have the same permissions when they use the Partner API.

Notes on Managing your API Key

*   You must ensure that the API key is not distributed to another party.
*   You must not add the API key to parts of a program where it is not required, e.g., embedded directly in to the code of a program.
*   You must keep the API key carefully in a safe location.

You also need to generate a public and private key combination to use with the Partner API key.

### Generate an API Key

1. Click **Generate Key**. In the New Partner API Key screen, the Key ID and Partner API Key show.

![partnerapi](/doc-images/apikeypartner.png)

2. Click **Copy.**

The Qredo server does not store the API key on the page. Thus, each time you arrive back to the Partner API page, you need to regenerate a new key. Generating a new key is required if you lose the original key.

:::note
If you have lost your API key and need to replace it, you can return to the Settings page in the Qredo app to generate a new key.

On the Settings page, your current API key appears hashed out. The new key only appears when you regenerate the key.
:::

1.  Click **Regenerate** Key.
2.  Click **Copy** in the New Partner API Key screen.

### Add a Public Key

A public key needs to be added to the Swagger UI. The public key enforces security by providing a signature in order to sign each request. 

The signature is used to sign areas where security needs to be applied including:

* the URL of the full path.
* the nonce (or number) that is generated for cryptographic purposes.
* the payload (body) for POST/PUT requests that contained added data.

1.  Generate a public and private key pair on the command line using openssl. 
2.  Extract the public key from the key pair using the command line.
3.  Add the public key to the partner API page.

API Endpoints
-------------

Once connected to the API, you have access to all the endpoints. You use the endpoints once you have created a company through the CreateCompany endpoint. From the Company endpoint, you manage the following endpoints:

| **Endpoint** | **Description** | 
| --- | --- |
| Company | A Company is an entity on the Qredo Network. Within a company are all the holdings and funds that are used on the Qredo Network. You create one or more companies, and update and search the companies by entering part of the company name.  A company can also be a trusted party to another company. Note that all endpoint functions require a company-id. | 
| Trusted Network | A trusted network lets you add other trusted parties. These can include other companies, e.g., Exchanges to an institution. Trusted parties can also include users. You can also find various trusted parties for a company, and delete a trusted party if needed. | 
| Holding | This is information on all the assets for a single company in the Qredo network that are within one or more funds. | 
| Fund | A fund is where you keep your assets and custody policies. You can add a fund to the Qredo network. You can also get existing funds and search for funds on the network. You can find the deposit address for a fund. For withdrawal addresses, you can add these to an individual fund. | 
| Transfer | Transfers are where money that is on the Qredo network is moved from one user to another. You can add a new transfer and find out the transfer status. |
| Withdrawal | Withdrawals is where money in a fund is sent out of the Qredo blockchain to a different cryptocurrency address. You can add a new withdrawal and find out the withdrawal status. | 


