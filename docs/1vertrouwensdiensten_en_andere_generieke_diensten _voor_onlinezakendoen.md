# Background 

The platform consultation has submitted the following question to the Knowledge Working Group to answer: *Which generic trust services are necessary for doing business online?*[^1]

Below is an explanation based on the most important perspectives: that of the provider of specific digital “trust” services (trust service provider) or of other generic services for doing business online; that of a company or organization that offers online services that make use of these services (such as a bank where you can sign a contract online); and that of the user.[^2]


# Generic services, what exactly are we talking about? 

The concept of a trust service, and what we mean by it, differs per person. Besides various personal definitions (a trust service ensures that you can do things online in a safe and reliable way…), there is also a legal definition that is included in the eIDAS 2.0 regulation, but it is fairly vague and open to multiple interpretations.[^3]

*“trust service”*: an electronic service that is normally provided for remuneration and consists of one of the following elements: (followed by a list of 14 services).

By now, more than 30 types of services can be identified that contribute to trust. Not all of them are considered trust services at European level: some are **generic services** that, for example, contribute to electronic identification or data management. Among these generic services, at least a number are **trust services**. There is also a distinction within that group.

On the one hand, there are the **qualified** eIDAS trust services: here, the provider is under continuous supervision. The supervisory authority assesses the provider and, after a positive assessment, places it (with its services) on the Dutch Trusted List if it meets, and continues to meet, the conditions. This Dutch list is then linked to the European List of the Lists (LOTL). Supervision takes place from the application for qualification registration, throughout the period of providing the service, and upon termination.

On the other hand, there are **non-qualified trust services** that also contribute to creating and safeguarding trust in order to do business online. For these services, a different form of supervision is in place: supervision mainly takes place afterwards, in response to complaints, incidents, reports, or disruptions in the trust services market. The requirements of the eIDAS regulation also apply to non-qualified trust services, but with less stringent requirements than those imposed on qualified services.[^4]. The Knowledge Working Group plotted these (30) services on the TIP ecosystem to provide insight into what these services do functionally and what value they offer. These are therefore all services that service providers such as trust service providers, private or public, can offer.

This overview also shows which “trust” services are needed to provide a service such as placing an electronic signature. It is not one service but a collection of services that makes this possible: think, for example, of services around the process of creating and issuing or revoking a “signing means,” and services that enable the process of actually placing a digital signature.

Separate from the above, there is also a distinction when applying an advanced or qualified electronic signature. All this complexity makes it confusing when people talk about the electronic signature: what exactly are they referring to? In such conversations, the overview of trust services is useful: it can be used as a kind of taxonomy.

In de eerste iteratie van de vertrouwensdienst-taxonomie maakt de TIP-werkgroep Kennis
onderscheid tussen:
- Ondertekendiensten, inclusief diensten voor handtekeningen, zegels en tijdsstempels;
- Toegangsdiensten, inclusief diensten voor uitgifte van identiteiten;
- Diensten voor attestering van attributen;
- Bezorgdiensten;
- Archiefdiensten;
- Registerdiensten;
- Website-authenticatiediensten;
- Diensten voor het beheer van persoonsgegevens;
- Diensten voor het leveren van vertrouwensdiensten;
- Diensten voor het leveren van een handelingsomgeving.

In the first iteration of the trust service taxonomy, the TIP Knowledge Working Group distinguishes between:
- Signing services, including services for signatures, seals, and timestamps;
- Access services, including services for issuing identities;
- Attribute attestation services;
- Delivery services;
- Archiving services;
- Registry services;
- Website authentication services;
- Services for the management of personal data;
- Services for delivering trust services;
- Services for providing acting spaces.

# Perspective from service provider: which trust services do I minimally need?
Suppose you are a bank, hospital, shop, or a government organization: what do you need trust services for? A first step toward answering this question is set out in a publication from the Ministry of Economic Affairs: [Informatiegids vertrouwensdiensten eIDAS | Brochure | Rijksoverheid.nl](https://www.rijksoverheid.nl/documenten/brochures/2025/02/28/informatiegids-vertrouwensdiensten-eidas).

Providing services based on trust services has the potential to save the organization a lot of money. That does depend on what stage an organization is at in terms of digitalization. The benefits are most visible in:
- Efficiency: Through full implementation of qualified electronic signatures, seals, timestamps, archiving, and Electronic Registered Delivery Services (ERDS), Dutch society could probably save between 200 and 400 million euros annually.[^5] Note that the qualitative benefits such as efficiency, fraud reduction, and cross interoperability have not yet been translated into quantitative benefits: it is striking how little economic research on the business case for trust services is available. The focus is mainly on implementation costs rather than returns.[^6] That is quite strange.
- Data quality: trust services provide insight into the authenticity and quality of data: the recipient knows that everything is correct. As a result, the data can be used immediately in the primary process without human intervention.
- KYC: being certain who is on the other end of the digital line; customers can be identified at a high level of trust.
- Non-repudiation: when using eIDAS trust services, both parties in a transaction can rely on correct recording. This means that “yes/no” disputes become a thing of the past, and this prevents or simplifies resolving legal disputes about how things happened.
- Reliability: this is guaranteed by the European eIDAS law and strict government supervision. Providers must meet high security requirements. This ensures that digital transactions have strong legal evidential value and can be trusted throughout the EU in a safe and uniform manner.

If the above matters are important for your services, then to start with you need the following trust services. You do not have to build these yourself; they can be obtained from eIDAS-recognized trust service providers.

## For organizations as a service provider (think of a bank):

**Digital sealing**[^7]: by placing a seal of your organization on information, the recipient knows it comes from the right sender and has not been altered. It is a digital hallmark that cannot be forged. DUO uses this technology to seal diplomas; beyond that it is still used only limitedly within government, even though the opportunities are there for the taking. There are also plenty of opportunities in the private sector; think of digital communication so you can be sure a letter is from the bank. And of course, it can also be applied to other media such as a news video to show that it is not a “deep fake” message.

**Digital signing**[^8]: this allows not only the organization but also a functionary to act. This can be done under one’s own name but also under a pseudonym, alone or as part of a group. Think of signing a contract or taking a (public) decision. These documents can no longer be altered afterwards, contain a timestamp, and usually also include proof of which ceremony was followed. In the Netherlands, usage is still limited; examples can be found at ING bank, NVM, and when filing annual reports. Here too, the opportunities are there for the taking: everything that is now signed with a wet signature can be done digitally—more reliable and safer.

**Validation**[^9]: as an organization you must still check whether the digital signature or seal is correct and in line with the signing policy. That is easier said than done because people often do not know how to do this. If you do not validate properly, the chain of trust breaks and then you might as well not use a trust service. Validation is more than having a colleague check for a blue bar in Adobe Acrobat. That is also not feasible as volumes increase; bulk validation is needed. A trust service provider can offer validation as a supporting service; the provider then performs a validation and delivers evidence of the outcome. Ideally this is automated. Digipoort and the banking information infrastructure already have a solution running for this.

**Website certificates**: by using qualified website authentication certificates (QWAC), the customer knows the website is authentic. 

The trust services above form the basis to get started. If you also want assurance that a piece of information has arrived properly, then registered delivery[^10] (via a qERDS) is ideal. This functionality is used in the Netherlands when sharing documents in the legal sector. Here too, other opportunities are there for the taking, such as submitting tender documents, sharing contracts with a time element (footballers during the transfer window).

In addition, it is important for an organization to comply with statutory retention obligations for documents. That period is often longer than the validity of a digital seal or signature. A trust service is needed to provide for this; this is the preservation service (Qualified preservation service). For preserving data for a longer period there is a qualified **archiving service**.[^11]

# Perspective from a consumer of digital services (organization, consumer, citizen)

As a citizen or consumer, you currently cannot do much even if you have a personal certificate to sign with. You do not need to sign often and many service providers do not ask for it. For service providers, there is more need to use a digital signature because of security, efficiency, or compliance.
For both groups, the biggest challenge seems to be how to make these services useful: why is a trust service needed (and would you want it) and why would you use it? Demonstrating usefulness is difficult because in recent years you have also been able to handle your affairs without a trust service.
The use of trust services by a consumer will in principle be initiated by the service provider who encourages or enforces use. This party has the most power to “push” the technology. The provider also enjoys the most benefits because it saves money and time.

## Which trust service would a user need?

A process for obtaining a “trust service” that is as simple as possible, and ease of use to then use it to log in/sign. The challenge is to identify someone at a high level of trust in as low-threshold a way as possible and issue a certificate. This creates a paradox: high reliability normally requires strict checks, but that conflicts with the aim of keeping the process accessible. These strict checks are often only needed once, after which you can confirm your action with a PIN code or another user-friendly method.

Being able to sign documents or information: apart from contracts with another party, there is also potential to show that you are the owner of the data or the electronic object. Think, for example, of submitting your thesis or paper, images and audio material, art, an idea, or your own declaration. Because it has a timestamp, you can irrefutably demonstrate that you are the original owner/creator.

Easy login: if companies and governments across Europe make it possible to log in by sharing the information in your own citizen certificate (name, date of birth, but above all your pseudonym), then you will immediately see the benefits because you are no longer bound to remembering all kinds of accounts. That makes life easy.

Being able to validate documents or information you receive as a consumer: how can I myself see that my diploma is real? Or a letter from a bailiff? Or a photo in a social media post? With AI, it is now possible to recreate fake information/digital duplicates with just a few clicks. At the moment, you cannot be sure who you are talking to or doing business with online, even if the people sound and look the same. If consumers learn to use the trust service to distinguish real from fake and thereby prevent becoming victims of fraud, then you also have an important reason for adoption. Using a trust service then becomes comparable to having a good lock on your front door.

# Conclusion
Trust services under the eIDAS regulation offer a great opportunity for the digital transformation of governments (NDS…), the business community, and financial institutions in the area of doing “online” business. Through full implementation of qualified electronic signatures, seals, timestamps, archiving, and Electronic Registered Delivery Services (ERDS), the Netherlands can become more efficient and safer, and save a lot of money. Since the trust services already exist and are available, this money is essentially just waiting… if you want to benefit from it, you have to start applying them. If you don’t… then you can just keep printing paper, sending it, scanning it, receiving it, checking it yourself, and archiving it.


# Annex
Overview of trust services on GitHub: github.com/trustedinformationpartners/services

[^1]: In the knowledge base: [Which generic trust services are needed for doing business online?](https://alkem.io/tip/collaboration/welkegeneriekevert-1149?tab=4) 
[^2]: For a clear overview of trust services, see: [Informatiegids vertrouwensdiensten eIDAS](https://www.rijksoverheid.nl/documenten/brochures/2025/02/28/informatiegids-vertrouwensdiensten-eidas)
[^3]: [See Article 3(16)](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401183)
[^4]: More information about the difference in supervision can be found here: [Electronic trust services | Rijksinspectie Digitale Infrastructuur (RDI)](https://www.rdi.nl/onderwerpen/elektronische-vertrouwensdiensten)
[^5]: This rough estimate is based on figures mentioned in [Impact assessment / European digital identity](https://eurlex.europa.eu/legal-content/EN/TXT/PDF/?uri=PI_COM%3ASEC%282021%29228). The projection is based on the Netherlands’ economic share in the EU of approximately 6.3%, calculated from the population share of 4% multiplied by Dutch GDP per capita being 1.58× higher than the EU average.
[^6]: See the INNOPAY study: [INNOPAY delivers report for Dutch Ministry of Economic Affairs and Climate on impact of eIDAS revision | INNOPAY](https://www.innopay.com/en/publications/innopay-delivers-report-dutch-ministry-economic-affairs-and-climate-impact-eidas)
[^7]: See basic function *Signing data*
[^8]: See basic function *Signing data*
[^9]: See basic function *Validating signatures*
[^10]: See basic function *Exchanging data*
[^11]: See basic function *Preserving signatures and Archiving data*



