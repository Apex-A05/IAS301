/* =========================================================
   COMPREHENSIVE CYBERSECURITY REVIEWER — DATA
   Modules 1-4 + Chapters 1-8
   ========================================================= */

const REVIEWER = [
  {
    id: "m1",
    title: "Module 1",
    sub: "Understanding Information Security",
    sections: [
      {
        h: "Core Concepts",
        items: [
          ["Information Security", "The protection of all available information or information resources, minimizing business risks and consequences of losing crucial data."],
          ["Risk", "Exposure to the chance of damage or loss; the likelihood of being targeted."],
          ["Threat", "Any event or action that could potentially cause damage to an asset — the source and means of an attack."],
          ["Vulnerability", "Any condition that leaves a system open to harm; the state of being open to attack."],
          ["Intrusion", "Unauthorized access or breach into a system or network."],
          ["Attack", "A technique used to exploit a vulnerability without authorization."],
          ["Controls", "Countermeasures put in place to avoid, mitigate, or counteract security risks."],
        ]
      },
      {
        h: "Goals of Security",
        items: [
          ["Prevention", "Stopping any form of attack from happening or entering the network/system."],
          ["Detection", "Discovering unauthorized access attempts or that information has been lost."],
          ["Recovery", "Retrieving vital data from a crashed system or storage device."],
        ]
      },
      {
        h: "CIA Triad",
        items: [
          ["Confidentiality", "Keeping information and communications private; protected by encryption, access controls, steganography."],
          ["Integrity", "Keeping information accurate, error-free and unmodified; protected by hashing, digital signatures, certificates."],
          ["Availability", "Ensuring systems operate continuously and authorized users can access data; protected by redundancy and patching."],
        ]
      },
      {
        h: "Authentication & Access",
        items: [
          ["Authentication", "Validating an entity's unique credentials to confirm right of entry."],
          ["Authorization", "Determining what rights and privileges an authenticated entity has."],
          ["Access Control", "Determining and assigning privileges to resources, objects, or data."],
          ["Something you are", "Authentication factor — fingerprints, handprints, retinal patterns."],
          ["Something you have", "Authentication factor — a key or ID card."],
          ["Something you know", "Authentication factor — a password or PIN."],
          ["Somewhere you are/aren't", "Authentication factor — IP address or GPS."],
          ["Something you do", "Authentication factor — keystroke patterns."],
        ]
      },
      {
        h: "Access Control Models",
        items: [
          ["MAC (Mandatory)", "Access controlled by comparing an object's security designation to a user's clearance — e.g., military Top Secret."],
          ["DAC (Discretionary)", "Access controlled on a customized, owner-decided basis tied to a user's ID."],
          ["RBAC (Role-Based)", "Access controlled based on a user's assigned role."],
          ["Rule-Based Access Control", "Rule sets are examined before granting access (e.g., login only 0900-1900)."],
        ]
      },
      {
        h: "Security Practices",
        items: [
          ["Implicit Deny", "Everything not explicitly allowed is denied."],
          ["Least Privilege", "Users/software get only the minimal access needed for their duties."],
          ["Separation of Duties", "No one person should have too much power; duties are divided to prevent abuse."],
          ["Job Rotation", "No one stays in a vital role too long."],
          ["Mandatory Vacation", "Required time off lets auditors review an employee's activity for discrepancies."],
          ["Accounting", "Tracking and recording system activities and resource access."],
          ["Auditing", "Examining the logs of what accounting recorded."],
        ]
      },
      {
        h: "Authentication Methods",
        items: [
          ["Username/Password", "Most basic, widely used authentication scheme; compares credentials to a stored database."],
          ["Tokens", "Physical/virtual objects (smart cards, ID badges) storing authentication info."],
          ["Biometrics", "Identification by physical characteristics — fingerprint, retina, voice."],
          ["Geolocation", "Authentication based on physical location."],
          ["Multifactor Authentication", "Uses two or more different authentication factors."],
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Module 2",
    sub: "Information Security Management Systems (ISO/IEC 27001)",
    sections: [
      {
        h: "ISMS Basics",
        items: [
          ["ISO/IEC 27001:2005", "A model for establishing, implementing, operating, monitoring, reviewing, maintaining, and improving an ISMS."],
          ["Process Approach", "Treats security management as inputs transformed into outputs across linked activities."],
        ]
      },
      {
        h: "Plan-Do-Check-Act (PDCA)",
        items: [
          ["Plan", "Establish ISMS policy, objectives, processes, and procedures relevant to managing risk."],
          ["Do", "Implement and operate the ISMS policy, controls, processes, and procedures."],
          ["Check", "Monitor and review performance/effectiveness against ISMS policy and objectives."],
          ["Act", "Take corrective/preventive action for continual improvement."],
        ]
      },
      {
        h: "Establishing the ISMS (10 Steps, key ones)",
        items: [
          ["Step 1", "Define the scope and boundaries of the ISMS."],
          ["Step 2", "Define an ISMS policy."],
          ["Step 3", "Define the risk assessment approach."],
          ["Step 4", "Identify the risks."],
          ["Step 5", "Analyze and evaluate the risks."],
          ["Step 6", "Identify and evaluate options for risk treatment."],
          ["Step 7", "Select control objectives and controls."],
          ["Step 8", "Obtain management approval of residual risks."],
          ["Step 9", "Obtain management authorization to implement/operate ISMS."],
          ["Step 10", "Prepare a Statement of Applicability."],
        ]
      },
      {
        h: "Security Policy Components",
        items: [
          ["Policy Statement", "Outlines the plan for an individual security component."],
          ["Standards", "Define how to measure adherence to the policy."],
          ["Guidelines", "Suggestions and recommendations."],
          ["Procedures", "Step-by-step instructions to implement policy components."],
          ["Group Policy", "Centralized account management feature in Active Directory used to enforce desktop/security settings."],
        ]
      },
      {
        h: "Types of Information Policy",
        items: [
          ["Acceptable Use Policy", "Must be agreed to before access to a network/internet is provided."],
          ["Backup Policy", "Ground rules for planning, executing, validating backups."],
          ["Incident Response Policy", "Instructions to detect, respond to, and recover from security incidents."],
          ["Password Policy", "Rules to encourage dependable, secure passwords."],
          ["Remote Access Policy", "Defines acceptable methods for remote connection to the internal network."],
          ["Data Classification Policy", "Categorizes stored information by sensitivity level."],
          ["Retention Policy", "Describes how long information is kept and how it is disposed of."],
        ]
      }
    ]
  },
  {
    id: "m3",
    title: "Module 3",
    sub: "Security Threats and Vulnerabilities",
    sections: [
      {
        h: "Social Engineering",
        items: [
          ["Social Engineering", "Deception/trickery that convinces users to give up sensitive data or violate guidelines; relies on human factors, not technology."],
          ["Spoofing", "Identity concealment, e.g., IP spoofing."],
          ["Impersonation", "Pretending to be someone else."],
          ["Hoax", "An email/web attack tricking the target into downloading/installing something."],
          ["Phishing", "Pursuing target info via unsolicited spam email."],
          ["Vishing", "Phishing via phone/VoIP."],
          ["Whaling", "Phishing targeting high-profile individuals."],
          ["URL Hijacking", "A mistyped letter in a URL redirects the victim."],
          ["Shoulder Surfing", "Looking over someone's shoulder to capture info."],
          ["Dumpster Diving", "Reclaiming information by inspecting trash."],
          ["Tailgating", "Staying close to a user to gain unauthorized entry."],
        ]
      },
      {
        h: "Hackers",
        items: [
          ["Hacker", "Neutral term for someone skilled in programming/system administration; builds things."],
          ["Cracker", "Breaks security without authorization; breaks things."],
          ["White Hat", "Ethical hacker who exposes flaws so they can be fixed."],
          ["Black Hat", "Exposes vulnerabilities for financial gain or malicious purpose."],
        ]
      },
      {
        h: "Malware Types",
        items: [
          ["Virus", "Code that self-replicates by attaching to other files; executes when the file opens."],
          ["Worm", "Replicates across systems without attaching to files; interrupts network capability."],
          ["Adware", "Automatically displays/downloads unsolicited advertisements."],
          ["Spyware", "Tracks and reports usage of a target system."],
          ["Trojan Horse", "Hidden malware that gives an attacker control; does not self-replicate."],
          ["Rootkit", "Takes full/partial control at the lowest levels; hides from detection."],
          ["Logic Bomb", "Dormant code triggered by a specific event (e.g., a date)."],
          ["Botnet", "Infected computers controlled collectively to mount attacks."],
        ]
      },
      {
        h: "Password Attacks",
        items: [
          ["Password Attack", "Any attack attempting to illegitimately obtain and use passwords."],
        ]
      }
    ]
  },
  {
    id: "m4",
    title: "Module 4",
    sub: "Security Policy Fundamentals",
    sections: [
      {
        h: "Security Policy",
        items: [
          ["Security Policy", "Formalized statement defining how security is implemented to protect the CIA of data and resources."],
          ["Group Policy", "Centralized AD feature controlling desktop/security settings enterprise-wide."],
        ]
      },
      {
        h: "Building a Policy Framework",
        items: [
          ["Creating a Framework", "Use an industry standards document as the baseline for acceptance by management/auditors."],
          ["Make it about Mandates", "Policy must reflect actual practice with no exceptions."],
          ["Sub-Policies", "Segregate policies by intended audience for well-defined subsets."],
        ]
      },
      {
        h: "Policy Elements & Supplements",
        items: [
          ["Scope", "Should address all info, systems, facilities, programs, data, networks, and users without exception."],
          ["Roles and Responsibilities", "Security duties of departments outside the security group."],
          ["Technology Standards", "Technical configuration parameters and values for asset access control."],
          ["Process documents", "Workflows showing how departments combine to handle information securely."],
        ]
      }
    ]
  },
  {
    id: "c1",
    title: "Chapter 1",
    sub: "Cybersecurity — A World of Experts and Criminals",
    sections: [
      {
        h: "Types of Hackers",
        items: [
          ["White Hat Attackers", "Break into systems to find weaknesses and improve security."],
          ["Gray Hat Attackers", "Between white and black hat; may report vulnerabilities if it suits their agenda."],
          ["Black Hat Attackers", "Unethical criminals violating security for personal gain or malice."],
        ]
      },
      {
        h: "Types of Cyber Criminals",
        items: [
          ["Script Kiddies", "Teens/hobbyists with little skill, using existing tools for pranks."],
          ["Vulnerability Brokers", "Gray hats who discover exploits and report them for rewards."],
          ["Hacktivists", "Gray hats who protest political/social causes via leaks and DDoS."],
          ["Cyber Criminals", "Black hats stealing money, self-employed or organized."],
          ["State Sponsored Hackers", "Steal government secrets/intelligence; target foreign governments and corporations."],
        ]
      },
      {
        h: "Coordinated Actions",
        items: [
          ["CVE Database", "National database of all known vulnerabilities."],
          ["Honeynet Project", "Early-warning system; provides a Honeymap of real-time attacks."],
          ["InfraGard", "Government–private sector partnership for sharing cyber intelligence."],
          ["ISO 27000", "Framework for implementing cybersecurity measures (ISM standards)."],
        ]
      },
      {
        h: "Threats & Domains",
        items: [
          ["Cybersecurity Threat", "The possibility a harmful event such as an attack will occur."],
          ["Cyber Vulnerability", "A weakness making a target susceptible to attack."],
          ["BYOD", "Bring Your Own Device — growing trend that's hard to centrally manage/update."],
          ["IoT", "Technologies enabling billions of devices to connect to the Internet, expanding what needs protection."],
          ["Big Data — 3 Vs", "Volume (amount), Velocity (speed), Variety (range of types/sources) of data."],
          ["APT", "Advanced Persistent Threat — continuous, under-the-radar hack for business/political motives."],
          ["TDoS", "Telephone Denial of Service — phone calls flood a target network, blocking legitimate calls."],
        ]
      },
      {
        h: "Workforce & Certifications",
        items: [
          ["NIST Workforce Framework", "Identifies major cybersecurity responsibilities, job titles, and skills needed."],
          ["Operate and Maintain", "NIST category: support, administration, maintenance for IT performance/security."],
          ["Protect and Defend", "NIST category: identify, analyze, mitigate threats to internal systems."],
          ["CompTIA Security+", "Certifies IT administrator competency in information assurance."],
          ["CEH", "EC-Council Certified Ethical Hacker — intermediate hacking-skills certification."],
          ["CISSP", "(ISC)² vendor-neutral cert for experienced security pros, approved by U.S. DoD."],
          ["CISM", "ISACA cert for managing/overseeing enterprise information security systems."],
        ]
      }
    ]
  },
  {
    id: "c2",
    title: "Chapter 2",
    sub: "The Cybersecurity Cube",
    sections: [
      {
        h: "Three Dimensions",
        items: [
          ["1st Dimension", "Principles of security — Confidentiality, Integrity, Availability (CIA)."],
          ["2nd Dimension", "States of data — at rest, in transit, in process."],
          ["3rd Dimension", "Cybersecurity safeguards — technologies, policies/practices, people."],
        ]
      },
      {
        h: "CIA Triad in Depth",
        items: [
          ["Confidentiality", "Prevents disclosure to unauthorized people/processes; ensured by encryption, authentication, access control."],
          ["Integrity", "Accuracy, consistency, trustworthiness of data over its lifecycle; ensured by hashing, validation, access controls."],
          ["Availability", "Information systems/services remain accessible at all times; ensured by redundancy, backups, resiliency."],
          ["AAA", "Authentication (verify identity), Authorization (determine access), Accounting (track usage)."],
          ["Confidentiality vs Privacy", "Confidentiality is an ethical duty about non-public status; privacy is appropriate use of data for its intended purpose."],
        ]
      },
      {
        h: "U.S. Privacy Laws",
        items: [
          ["Privacy Act of 1974", "Protects personal privacy."],
          ["FOIA", "Provides public access to government records."],
          ["FERPA", "Protects student education records."],
          ["CFAA", "Addresses computer-related crimes."],
          ["COPPA", "Protects children's online privacy."],
          ["HIPAA", "Protects health information."],
          ["GLBA", "Protects financial information."],
          ["PCI DSS", "Protects payment card data."],
        ]
      },
      {
        h: "States of Data",
        items: [
          ["Data at Rest", "Stored data — DAS, RAID, NAS, SAN."],
          ["Data in Transit", "Data being transmitted — sneaker net, wired, wireless networks."],
          ["Data in Process", "Data during input, modification, computation, or output."],
        ]
      },
      {
        h: "Countermeasures & ISO Model",
        items: [
          ["Software Safeguards", "Programs/services protecting OS, databases, services."],
          ["Hardware Safeguards", "Appliances like firewalls, IDS, IPS, content filtering."],
          ["VPN", "Secure virtual network encrypting packets between endpoints over a public network."],
          ["NAC", "Network Access Control — checks (e.g., updated AV) before allowing connection."],
          ["SaaS", "Software as a Service — cloud delivers app software and databases."],
          ["IaaS", "Infrastructure as a Service — cloud provider hosts hardware/servers/storage."],
          ["ISO/IEC 27000", "Information security standard (2005, revised 2013); de facto framework though not mandatory."],
        ]
      }
    ]
  },
  {
    id: "c3",
    title: "Chapter 3",
    sub: "Cybersecurity Threats, Vulnerabilities, and Attacks",
    sections: [
      {
        h: "Malware & Malicious Code",
        items: [
          ["Virus", "Malicious code attached to an executable; needs end-user initiation."],
          ["Worm", "Replicates by exploiting network vulnerabilities; runs without a host program."],
          ["Trojan Horse", "Disguised as desired software; binds to non-executable files like images/audio."],
          ["Logic Bomb", "Triggered by an event (date, program run, account deletion)."],
          ["Ransomware", "Encrypts data and holds it captive until payment is made."],
          ["Backdoors/Rootkits", "Bypass normal authentication; rootkit modifies the OS to create a backdoor."],
        ]
      },
      {
        h: "Email & Browser Attacks",
        items: [
          ["Spam", "Unsolicited junk email, often advertising or carrying malware."],
          ["Scareware", "Forges OS-like pop-ups to scare users into action."],
          ["Phishing", "Fraudulent emails/messages masquerading as a reputable entity."],
          ["Spear Phishing", "Customized phishing targeting a specific person."],
          ["Vishing", "Phishing via voice/VoIP, often spoofed calls."],
          ["Pharming", "Impersonating a legitimate website to steal credentials."],
          ["Whaling", "Phishing aimed at senior executives/high-profile targets."],
          ["SEO Poisoning", "Uses SEO techniques to rank malicious sites higher in search results."],
          ["Browser Hijacker", "Alters browser settings to redirect users, often via drive-by download."],
        ]
      },
      {
        h: "Social Engineering Types",
        items: [
          ["Pretexting", "Lying to gain access to privileged data, e.g., posing to confirm identity."],
          ["Quid pro quo", "Requesting personal info in exchange for something like a gift."],
          ["Shoulder Surfing", "Picking up PINs/codes by close observation or cameras."],
          ["Piggybacking/Tailgating", "Tagging along with an authorized person into a secure area."],
        ]
      },
      {
        h: "Cyber Attacks",
        items: [
          ["DoS Attack", "Interrupts network services to users/devices; simple to conduct."],
          ["Sniffing", "Examining all network traffic passing through a NIC."],
          ["Spoofing", "Exploits trusted relationships between systems via impersonation."],
          ["Man-in-the-Middle (MitM)", "Intercepts and possibly manipulates communications between two systems."],
          ["Zero-Day Attack", "Exploits a vulnerability unknown/undisclosed by the vendor."],
          ["Keyboard Logging", "Software/hardware that records the user's keystrokes."],
        ]
      },
      {
        h: "Wireless & Application Attacks",
        items: [
          ["SMiShing", "SMS-based phishing tricking users via fake text messages."],
          ["Bluejacking", "Sending unauthorized messages to a Bluetooth device."],
          ["Bluesnarfing", "Copying victim data (emails, contacts) from a Bluetooth device."],
          ["WEP", "Early WLAN security protocol with no key management — weak."],
          ["WPA2", "Improved protocol over WEP; still vulnerable via offline passphrase attacks."],
          ["Cross-Site Scripting (XSS)", "Injects malicious scripts into pages viewed by users."],
          ["Buffer Overflow", "Data exceeds buffer limits, accessing memory of other processes."],
          ["Remote Code Execution", "Lets an attacker run arbitrary commands on a target machine."],
        ]
      }
    ]
  },
  {
    id: "c4",
    title: "Chapter 4",
    sub: "The Art of Protecting Secrets (Cryptography)",
    sections: [
      {
        h: "Cryptography Basics",
        items: [
          ["Cryptology", "The science of making and breaking secret codes."],
          ["Cryptography", "Storing/transmitting data so only the intended recipient can read it."],
          ["Cipher", "The specific algorithm used to encrypt and decrypt messages."],
          ["Symmetric Algorithms", "Use the same pre-shared key to encrypt and decrypt."],
          ["Asymmetric Algorithms", "Use a public key to encrypt and a different private key to decrypt."],
        ]
      },
      {
        h: "Symmetric Standards",
        items: [
          ["3DES", "Triple DES — encrypts data three times, cumulative key size 112–168 bits."],
          ["IDEA", "64-bit blocks, 128-bit keys, 8 rounds of transformation."],
          ["AES", "128-bit block, 128/192/256-bit keys; U.S. government standard since Dec 2001."],
        ]
      },
      {
        h: "Asymmetric Algorithms",
        items: [
          ["RSA", "Uses the product of two large prime numbers; browsers use it for secure connections."],
          ["Diffie-Hellman", "Electronic method to exchange a secret key; used by SSL/TLS/SSH/IPsec."],
          ["ElGamal", "U.S. government digital signature standard; free, unpatented."],
          ["ECC", "Uses elliptic curves; NSA uses it for digital signatures and key exchange."],
        ]
      },
      {
        h: "Access Control",
        items: [
          ["Physical Access Controls", "Barriers preventing direct contact with systems."],
          ["Logical Access Controls", "Hardware/software for identification, authentication, authorization, accountability."],
          ["Administrative Access Controls", "Policies/procedures focused on personnel and business practices."],
          ["Identification", "Enforces rules of the authorization policy when a subject requests a resource."],
          ["Authorization", "Controls what an authenticated user can/cannot do."],
          ["Accountability", "Traces actions back to a person/process and reports usage data."],
        ]
      },
      {
        h: "Security Control Types",
        items: [
          ["Preventative Controls", "Stop unwanted/unauthorized activity from happening."],
          ["Deterrent Controls", "Discourage wrongdoing (opposite of a reward)."],
          ["Detective Controls", "Identify that unauthorized activity occurred."],
          ["Corrective Controls", "Counteract and restore CIA after a threat occurs."],
          ["Recovery Controls", "Restore resources/functions after a policy violation."],
          ["Compensative Controls", "Substitute or bolster other controls when those aren't possible."],
        ]
      },
      {
        h: "Obscuring Data",
        items: [
          ["Data Masking", "Secures data by replacing sensitive info with a non-sensitive look-alike version."],
          ["Steganography", "Conceals a message inside another file (image/audio/text) without attracting attention."],
          ["Data Obfuscation", "Making a message confusing/ambiguous to prevent unauthorized understanding."],
          ["Software Watermarking", "Inserts a secret message into a program as proof of ownership."],
        ]
      }
    ]
  },
  {
    id: "c5",
    title: "Chapter 5",
    sub: "The Art of Ensuring Integrity",
    sections: [
      {
        h: "Hashing",
        items: [
          ["Hashing", "One-way function producing a fixed-length hash value (message digest) from data."],
          ["MD5", "Hash algorithm by Ron Rivest producing a 128-bit hash value."],
          ["SHA", "NIST-developed family — SHA-224/256/384/512 by bit length."],
          ["Salting", "Adds a random string to a password before hashing so identical passwords hash differently."],
          ["HMAC", "Strengthens hashing by combining a secret key with the hash function for authentication."],
        ]
      },
      {
        h: "Signatures & Certificates",
        items: [
          ["Digital Signature", "Mathematical method to check authenticity/integrity of a message or document; legally binding in many countries."],
          ["Digital Certificate", "Electronic passport authenticating users/hosts; enables secure information exchange."],
          ["X.509", "Standard for constructing digital certificates and the PKI."],
          ["PKI", "Policies, roles, and procedures to create, manage, distribute, use, store, revoke certificates."],
        ]
      },
      {
        h: "Database Integrity",
        items: [
          ["Entity Integrity", "Every row has a unique, non-null Primary Key."],
          ["Domain Integrity", "All data in a column follows the same format/definition."],
          ["Referential Integrity", "Table relationships stay consistent; can't delete a referenced record."],
          ["User-defined Integrity", "Custom rules set by the user/organization."],
          ["Validation Rule", "Checks data falls within designer-defined parameters (size, format, range, etc.)."],
        ]
      }
    ]
  },
  {
    id: "c6",
    title: "Chapter 6",
    sub: "The Five Nines Concept (High Availability)",
    sections: [
      {
        h: "Five Nines",
        items: [
          ["Five Nines", "99.999% availability — under 5.26 minutes downtime per year."],
          ["High Availability", "A system/component that is continuously operational over a given period."],
          ["3 HA Principles", "Eliminate single points of failure, design for reliability, detect failures as they occur."],
        ]
      },
      {
        h: "Asset Management & Defense in Depth",
        items: [
          ["Asset Classification", "Groups resources by common characteristics."],
          ["Asset Standardization", "Specifies acceptable IT assets meeting objectives."],
          ["Layered Approach", "Multiple coordinated defense layers, each harder to breach than the last."],
          ["Diversity", "Varying controls/procedures per layer so breaching one doesn't compromise all."],
          ["Obscuring Information", "Hiding details attackers could use, like OS/version info."],
        ]
      },
      {
        h: "Redundancy",
        items: [
          ["N+1 Redundancy", "At least one backup component beyond what's needed (e.g., spare tire)."],
          ["RAID", "Combines multiple disks into one logical unit for redundancy/performance."],
          ["Parity", "RAID method that detects data errors."],
          ["Striping", "RAID method writing data across multiple drives."],
          ["Mirroring", "RAID method storing duplicate data on a second drive."],
          ["STP", "Spanning Tree Protocol — prevents network loops from redundant links."],
          ["HSRP", "Hot Standby Router Protocol — first-hop routing redundancy."],
          ["VRRP", "Virtual Router Redundancy Protocol — elects a virtual master router."],
        ]
      },
      {
        h: "Incident Response & Disaster Recovery",
        items: [
          ["CSIRT", "Computer Security Incident Response Team managing incident response."],
          ["Preparation", "IR Phase 1 — planning for potential incidents."],
          ["Detection and Analysis", "IR Phase 2 — discovering the incident."],
          ["Containment, Eradication, Recovery", "IR Phase 3 — contain/eradicate threat, begin recovery."],
          ["Post-Incident Follow-Up", "IR Phase 4 — investigate cause and understand the threat."],
          ["IDS", "Intrusion Detection System — passive monitoring of network traffic."],
          ["IPS", "Intrusion Prevention System — inline, can address problems immediately."],
          ["Business Continuity Plan", "Plan to keep an organization functioning regardless of disaster."],
        ]
      }
    ]
  },
  {
    id: "c7",
    title: "Chapter 7",
    sub: "Protecting a Cybersecurity Domain",
    sections: [
      {
        h: "Host Hardening",
        items: [
          ["OS Hardening", "Modifying default configuration to remove unnecessary programs/services and apply patches."],
          ["Patch Management", "Applying code updates (patches/service packs) to prevent successful attacks."],
          ["Host-based Firewall", "Software allowing/denying traffic to/from a computer."],
          ["HIDS", "Host Intrusion Detection System — software monitoring suspicious host activity."],
          ["Mutual Authentication", "Two-way authentication preventing rogue access points."],
        ]
      },
      {
        h: "Host Data Protection",
        items: [
          ["File Access Control", "Permissions limiting folder/file access for users or groups."],
          ["File Encryption", "Makes stored data unreadable without the proper key."],
          ["Disk Cloning", "Copies hard disk contents to an image file."],
          ["Deep Freeze", "Freezes a hard drive partition so changes aren't saved after restart."],
          ["GPS Tracking", "Satellite-based real-time device location tracking."],
          ["RFID Tags", "Radio waves used to identify and track inventory objects."],
        ]
      },
      {
        h: "Server & Network Hardening",
        items: [
          ["Telnet", "Older protocol using unsecure plaintext for login/data."],
          ["SSH", "Secure encrypted management connection; should replace Telnet."],
          ["SCP", "Securely transfers files between remote systems via SSH."],
          ["Privileged Accounts", "Powerful accounts with elevated access; must be secured/removed if unneeded."],
          ["NOC", "Network Operation Center — ground zero for monitoring and managing the network."],
          ["VLAN", "Groups devices logically within a LAN/switches instead of physically."],
        ]
      },
      {
        h: "Physical Security",
        items: [
          ["Fencing and Barricades", "Outermost physical security layer."],
          ["Biometrics", "Automated recognition via physiological/behavioral traits."],
          ["Badges and Access Logs", "Track entry using magnetic stripe, barcode, or biometric tech."],
          ["Video Surveillance", "Monitors areas continuously, even without guards present."],
        ]
      }
    ]
  },
  {
    id: "c8",
    title: "Chapter 8",
    sub: "Becoming a Cybersecurity Specialist",
    sections: [
      {
        h: "Cybersecurity Domains",
        items: [
          ["User Domain", "Users accessing the org's information system — often the weakest link."],
          ["Device Domain", "Threats: unattended workstations, unpatched software, malware."],
          ["LAN Domain", "Threats: unauthorized LAN access, unpatched OS, port scanning."],
          ["Private Cloud (WAN) Domain", "Threats: probing/port scanning, router/firewall misconfiguration."],
          ["Public Cloud Domain", "Threats: data breaches, compromised credentials, account hijacking."],
          ["Physical Facilities Domain", "Threats: natural disasters, unauthorized facility access."],
          ["Application Domain", "Threats: unauthorized access to data centers, software vulnerabilities."],
        ]
      },
      {
        h: "Ethics & Law",
        items: [
          ["Ethics", "The guiding sense of right/wrong regardless of legality."],
          ["Computer Ethics Institute", "Resource identifying/assessing IT ethical issues."],
          ["Computer-assisted crime", "A computer is used as the tool to commit a crime."],
          ["Computer-incidental crime", "Computer is just a storage device, not the tool, e.g., storing illegal material."],
          ["SOX", "Sarbanes-Oxley Act — industry-specific regulatory law."],
        ]
      },
      {
        h: "Tools & Resources",
        items: [
          ["NVD", "National Vulnerability Database — U.S. repository using SCAP."],
          ["CERT", "Carnegie Mellon's SEI group helping orgs build trustworthy software systems."],
          ["Vulnerability Scanners", "Automate scanning for security risks and prioritize weaknesses."],
          ["Penetration Testing", "Authorized hacking attempt to test for weaknesses."],
          ["Packet Analyzers", "Intercept and log network traffic for analysis."],
        ]
      }
    ]
  }
];

/* =========================================================
   FLASHCARDS — auto-derived term/definition pairs (flattened)
   ========================================================= */
const FLASHCARDS = REVIEWER.flatMap(mod =>
  mod.sections.flatMap(sec =>
    sec.items.map(([term, def]) => ({
      module: mod.title,
      category: sec.h,
      term, def
    }))
  )
);

/* =========================================================
   QUIZ BANK
   type: "mc" (multiple choice, 4 options) | "id" (identification, type the answer)
   ========================================================= */
const QUIZ_BANK = [
  // ---------- MODULE 1 ----------
  {type:"mc", q:"Which CIA Triad principle is concerned with keeping information private and protected from unauthorized access?", a:"Confidentiality", choices:["Confidentiality","Integrity","Availability","Authentication"]},
  {type:"mc", q:"Which CIA principle ensures data is accurate and free from unauthorized modification?", a:"Integrity", choices:["Integrity","Confidentiality","Authorization","Accounting"]},
  {type:"mc", q:"Which principle ensures authorized users can access systems and data continuously?", a:"Availability", choices:["Availability","Confidentiality","Integrity","Authentication"]},
  {type:"id", q:"This term refers to a weakness or condition that leaves a system open to harm.", a:"vulnerability"},
  {type:"id", q:"This term refers to any event or action that could potentially cause damage to an asset.", a:"threat"},
  {type:"id", q:"This term describes exposure to the chance of damage or loss.", a:"risk"},
  {type:"id", q:"An unauthorized access or breach into a system or network is called this.", a:"intrusion"},
  {type:"mc", q:"What is the term for countermeasures put in place to avoid, mitigate, or counteract security risks?", a:"Controls", choices:["Controls","Audits","Standards","Procedures"]},
  {type:"mc", q:"Which access control model bases access on an object's classification and the user's clearance level (e.g., military)?", a:"Mandatory Access Control (MAC)", choices:["Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Role-Based Access Control (RBAC)","Rule-Based Access Control"]},
  {type:"mc", q:"Which access control model grants access based on a user's assigned job function?", a:"Role-Based Access Control (RBAC)", choices:["Role-Based Access Control (RBAC)","Mandatory Access Control (MAC)","Discretionary Access Control (DAC)","Rule-Based Access Control"]},
  {type:"mc", q:"Which security practice states that no one person should have too much power or responsibility?", a:"Separation of Duties", choices:["Separation of Duties","Least Privilege","Implicit Deny","Job Rotation"]},
  {type:"mc", q:"Which practice ensures users only get the minimal access necessary for their job?", a:"Least Privilege", choices:["Least Privilege","Implicit Deny","Mandatory Vacation","Privilege Management"]},
  {type:"id", q:"This security practice dictates that everything not explicitly allowed is denied.", a:"implicit deny"},
  {type:"mc", q:"An authentication factor based on fingerprints or retinal patterns is classified as:", a:"Something you are", choices:["Something you are","Something you have","Something you know","Something you do"]},
  {type:"mc", q:"A password or PIN is classified under which authentication factor?", a:"Something you know", choices:["Something you know","Something you are","Something you have","Somewhere you are"]},
  {type:"id", q:"This authentication method uses two or more different authentication factors together.", a:"multifactor authentication"},
  {type:"mc", q:"Which process determines what rights and privileges a particular entity has after authentication?", a:"Authorization", choices:["Authorization","Authentication","Accounting","Auditing"]},
  {type:"mc", q:"The part of accounting where a security professional examines logs is called:", a:"Auditing", choices:["Auditing","Accounting","Authorization","Authentication"]},

  // ---------- MODULE 2 ----------
  {type:"mc", q:"In the PDCA model, which phase involves establishing the ISMS policy and objectives?", a:"Plan", choices:["Plan","Do","Check","Act"]},
  {type:"mc", q:"In the PDCA model, which phase involves implementing and operating the ISMS controls?", a:"Do", choices:["Do","Plan","Check","Act"]},
  {type:"mc", q:"Which PDCA phase assesses ISMS performance against policy and reports to management?", a:"Check", choices:["Check","Plan","Do","Act"]},
  {type:"mc", q:"Which PDCA phase takes corrective and preventive action for continual improvement?", a:"Act", choices:["Act","Plan","Do","Check"]},
  {type:"id", q:"This document includes the control objectives and controls selected, those implemented, and justification for exclusions.", a:"statement of applicability"},
  {type:"mc", q:"Which security policy component defines how to measure the level of adherence to a policy?", a:"Standards", choices:["Standards","Guidelines","Procedures","Policy Statement"]},
  {type:"mc", q:"Which policy component provides step-by-step instructions to implement policy components?", a:"Procedures", choices:["Procedures","Standards","Guidelines","Policy Statement"]},
  {type:"id", q:"This centralized account management feature in Active Directory controls desktop and security settings.", a:"group policy"},
  {type:"mc", q:"Which policy requires users to agree to terms before being given network or internet access?", a:"Acceptable Use Policy", choices:["Acceptable Use Policy","Password Policy","Remote Access Policy","Retention Policy"]},
  {type:"mc", q:"Which policy describes how long information should be kept and how it should be disposed of?", a:"Retention Policy", choices:["Retention Policy","Backup Policy","Data Classification Policy","Encryption Policy"]},
  {type:"mc", q:"Which policy outlines acceptable methods for remotely connecting to an internal network?", a:"Remote Access Policy", choices:["Remote Access Policy","Network Access Policy","Third Party Connection Policy","Wireless Policy"]},

  // ---------- MODULE 3 ----------
  {type:"mc", q:"Which type of attack relies on human factors rather than technology to gather sensitive data?", a:"Social Engineering", choices:["Social Engineering","Malware Attack","Password Attack","Zero-Day Attack"]},
  {type:"id", q:"This type of social engineering uses spam unsolicited emails to pursue target information.", a:"phishing"},
  {type:"id", q:"This type of social engineering is phishing conducted through phone calls or VoIP.", a:"vishing"},
  {type:"mc", q:"Which social engineering attack targets high-profile individuals such as executives?", a:"Whaling", choices:["Whaling","Vishing","Spam","Spim"]},
  {type:"mc", q:"Reclaiming important information by inspecting trash containers is known as:", a:"Dumpster Diving", choices:["Dumpster Diving","Shoulder Surfing","Tailgating","Hoax"]},
  {type:"mc", q:"Staying close to a user to gain unauthorized physical entry is called:", a:"Tailgating", choices:["Tailgating","Shoulder Surfing","Dumpster Diving","Spoofing"]},
  {type:"mc", q:"Which term describes someone who breaks security on a system without authorization?", a:"Cracker", choices:["Cracker","Hacker","White Hat","Vulnerability Broker"]},
  {type:"mc", q:"Which type of hacker exposes security flaws so manufacturers can fix them before they become widespread problems?", a:"White Hat", choices:["White Hat","Black Hat","Cracker","Script Kiddie"]},
  {type:"id", q:"This malware self-replicates by attaching to other files and executes when the file is opened.", a:"virus"},
  {type:"id", q:"This malware replicates across a network without attaching itself to other files or programs.", a:"worm"},
  {type:"mc", q:"Which malware gives an attacker control of a system but does NOT self-replicate, hiding inside seemingly normal software?", a:"Trojan Horse", choices:["Trojan Horse","Worm","Virus","Logic Bomb"]},
  {type:"mc", q:"Which malware lies dormant until triggered by a specific event such as a date?", a:"Logic Bomb", choices:["Logic Bomb","Trojan Horse","Rootkit","Botnet"]},
  {type:"mc", q:"Which malware attempts to take full or partial control of a system at the lowest levels while hiding from detection?", a:"Rootkit", choices:["Rootkit","Adware","Spyware","Worm"]},
  {type:"id", q:"A set of infected computers controlled collectively by attackers to mount coordinated attacks is called a:", a:"botnet"},

  // ---------- MODULE 4 ----------
  {type:"mc", q:"A formalized statement defining how security will be implemented to protect the CIA of data is called:", a:"Security Policy", choices:["Security Policy","Group Policy","Standard","Guideline"]},
  {type:"mc", q:"What approach to building a security policy ensures it will be accepted by management and external auditors?", a:"Using an industry standards document as the baseline framework", choices:["Using an industry standards document as the baseline framework","Writing it from scratch with no references","Copying another company's full policy","Avoiding documentation entirely"]},
  {type:"id", q:"Segregating policies by intended audience so different sub-organizations publish their own version is called employing:", a:"sub-policies"},
  {type:"mc", q:"Which element of an information security policy should address all info, systems, facilities, programs, data, and users without exception?", a:"Scope", choices:["Scope","Context","Consequences","Responsibilities"]},

  // ---------- CHAPTER 1 ----------
  {type:"mc", q:"Which type of hacker may report a vulnerability to the owner only if it suits their own agenda?", a:"Gray Hat Attacker", choices:["Gray Hat Attacker","White Hat Attacker","Black Hat Attacker","Script Kiddie"]},
  {type:"mc", q:"Which type of cyber criminal rallies and protests political/social causes using DDoS attacks and leaks?", a:"Hacktivists", choices:["Hacktivists","Script Kiddies","Vulnerability Brokers","State Sponsored Hackers"]},
  {type:"id", q:"Teenagers or hobbyists with little to no skill who use existing tools for pranks and vandalism are called:", a:"script kiddies"},
  {type:"mc", q:"Which organization provides a publicly available database of all known vulnerabilities?", a:"CVE Database", choices:["CVE Database","Honeynet Project","InfraGard","ISACA"]},
  {type:"mc", q:"Which project provides a 'Honeymap' showing real-time visualizations of attacks?", a:"Honeynet Project", choices:["Honeynet Project","InfraGard","CVE Database","NVD"]},
  {type:"id", q:"This is a continuous, under-the-radar computer hack against a specific target for business or political motives.", a:"advanced persistent threat"},
  {type:"mc", q:"Which trend refers to employees using their personal devices (phones, tablets) to access enterprise information?", a:"BYOD (Bring Your Own Device)", choices:["BYOD (Bring Your Own Device)","IoT","Big Data","Federated Identity"],},
  {type:"mc", q:"Which of the big data 'three Vs' refers to the range of data types and sources?", a:"Variety", choices:["Variety","Volume","Velocity","Validity"]},
  {type:"mc", q:"A telephone denial of service (TDoS) attack primarily targets which type of system?", a:"Telephone/911 call center networks", choices:["Telephone/911 call center networks","Wireless access points","Database servers","Email servers"]},
  {type:"mc", q:"Which certification is approved by the U.S. Department of Defense and is for experienced security professionals?", a:"CISSP", choices:["CISSP","Security+","CEH","GSEC"]},
  {type:"mc", q:"Which NIST workforce category includes identification, analysis, and mitigation of threats to internal systems?", a:"Protect and Defend", choices:["Protect and Defend","Operate and Maintain","Investigate","Collect and Operate"]},

  // ---------- CHAPTER 2 ----------
  {type:"mc", q:"What is the first dimension of the cybersecurity cube?", a:"Principles of security (CIA)", choices:["Principles of security (CIA)","States of data","Cybersecurity safeguards","Threat domains"]},
  {type:"mc", q:"What is the second dimension of the cybersecurity cube?", a:"States of data", choices:["States of data","Principles of security","Cybersecurity safeguards","Access control models"]},
  {type:"mc", q:"Which of the three safeguards in the cybersecurity cube refers to devices and products that protect information systems?", a:"Technologies", choices:["Technologies","Policies and Practices","People","Procedures"]},
  {type:"mc", q:"Which AAA concept verifies the identity of a user before allowing access?", a:"Authentication", choices:["Authentication","Authorization","Accounting","Accountability"]},
  {type:"mc", q:"Which U.S. law protects student education records?", a:"FERPA", choices:["FERPA","FOIA","COPPA","HIPAA"]},
  {type:"mc", q:"Which U.S. law protects children's online privacy?", a:"COPPA", choices:["COPPA","FERPA","CFAA","GLBA"]},
  {type:"mc", q:"Which U.S. law protects financial information?", a:"Gramm-Leach-Bliley Act (GLBA)", choices:["Gramm-Leach-Bliley Act (GLBA)","HIPAA","FCRA","PCI DSS"]},
  {type:"id", q:"This state of data refers to data being stored, such as on a hard drive or network storage device.", a:"data at rest"},
  {type:"id", q:"This state of data refers to data during initial input, modification, computation, or output.", a:"data in process"},
  {type:"mc", q:"Which network storage option connects multiple disks to be seen by the OS as a single disk for better performance and fault tolerance?", a:"RAID", choices:["RAID","DAS","NAS","SAN"]},
  {type:"mc", q:"Which cloud service model gives users access to application software and databases while the provider manages infrastructure?", a:"Software as a Service (SaaS)", choices:["Software as a Service (SaaS)","Infrastructure as a Service (IaaS)","Platform as a Service (PaaS)","Network as a Service (NaaS)"]},
  {type:"mc", q:"Which technology requires checks like up-to-date antivirus before allowing a device to connect to a network?", a:"Network Access Control (NAC)", choices:["Network Access Control (NAC)","Virtual Private Network (VPN)","Intrusion Detection System (IDS)","Firewall"]},
  {type:"id", q:"This ISO standard, published in 2005 and revised in 2013, is the de facto framework for information security management even though it's not mandatory.", a:"iso/iec 27000"},

  // ---------- CHAPTER 3 ----------
  {type:"mc", q:"Which malware encrypts a victim's data and demands payment to restore access?", a:"Ransomware", choices:["Ransomware","Logic Bomb","Worm","Adware"]},
  {type:"mc", q:"Which malware modifies the operating system to create a backdoor for remote access?", a:"Rootkit", choices:["Rootkit","Trojan Horse","Worm","Spyware"]},
  {type:"mc", q:"Which type of phishing sends customized emails targeting one specific person?", a:"Spear Phishing", choices:["Spear Phishing","Whaling","Vishing","Pharming"]},
  {type:"mc", q:"Which attack impersonates a legitimate website to deceive users into entering credentials?", a:"Pharming", choices:["Pharming","Phishing","Spear Phishing","SEO Poisoning"]},
  {type:"id", q:"This technique uses Search Engine Optimization tactics to make a malicious website rank higher in search results.", a:"seo poisoning"},
  {type:"mc", q:"Which malware alters browser settings to redirect a user to attacker-paid websites?", a:"Browser Hijacker", choices:["Browser Hijacker","Adware","Scareware","Spyware"]},
  {type:"mc", q:"Which social engineering attack involves an attacker lying on the phone to gain access to privileged data?", a:"Pretexting", choices:["Pretexting","Quid pro quo","Shoulder Surfing","Hoax"]},
  {type:"mc", q:"Which attack intercepts communications between two computers, potentially altering and relaying false data?", a:"Man-in-the-Middle (MitM)", choices:["Man-in-the-Middle (MitM)","Sniffing","Spoofing","Zero-Day Attack"]},
  {type:"mc", q:"Which attack exploits a software vulnerability that is unknown or undisclosed by the vendor?", a:"Zero-Day Attack", choices:["Zero-Day Attack","Man-in-the-Middle","Buffer Overflow","SQL Injection"]},
  {type:"id", q:"This phishing variant sends fake text messages via SMS to trick the victim.", a:"smishing"},
  {type:"mc", q:"Copying a victim's contact list and emails from their Bluetooth device is called:", a:"Bluesnarfing", choices:["Bluesnarfing","Bluejacking","RF Jamming","Rogue Access Point"]},
  {type:"mc", q:"Sending unauthorized messages to another nearby Bluetooth device is called:", a:"Bluejacking", choices:["Bluejacking","Bluesnarfing","SMiShing","Spim"]},
  {type:"mc", q:"Which web vulnerability allows attackers to inject malicious scripts into pages viewed by other users?", a:"Cross-Site Scripting (XSS)", choices:["Cross-Site Scripting (XSS)","Buffer Overflow","SQL Injection","Remote Code Execution"]},
  {type:"mc", q:"Which attack occurs when data exceeds the limits of an allocated memory buffer, potentially causing a crash or privilege escalation?", a:"Buffer Overflow", choices:["Buffer Overflow","Cross-Site Scripting","SQL Injection","Zero-Day Attack"]},
  {type:"mc", q:"What is the first line of defense against application attacks?", a:"Writing solid, secure code", choices:["Writing solid, secure code","Disabling all user accounts","Removing all databases","Using only symmetric encryption"]},

  // ---------- CHAPTER 4 ----------
  {type:"mc", q:"Which type of encryption uses the same pre-shared key for both encryption and decryption?", a:"Symmetric Encryption", choices:["Symmetric Encryption","Asymmetric Encryption","Hashing","Steganography"]},
  {type:"mc", q:"Which type of encryption uses a public key to encrypt and a separate private key to decrypt?", a:"Asymmetric Encryption", choices:["Asymmetric Encryption","Symmetric Encryption","Hashing","Salting"]},
  {type:"id", q:"This symmetric encryption standard has a fixed 128-bit block size and key sizes of 128, 192, or 256 bits and was approved by NIST in 2001.", a:"aes"},
  {type:"mc", q:"Which asymmetric algorithm uses the product of two very large prime numbers and is used by browsers to establish secure connections?", a:"RSA", choices:["RSA","Diffie-Hellman","ElGamal","ECC"]},
  {type:"mc", q:"Which algorithm provides an electronic method for two parties to share a secret key, used by SSL/TLS/SSH/IPsec?", a:"Diffie-Hellman", choices:["Diffie-Hellman","RSA","ElGamal","ECC"]},
  {type:"mc", q:"Which algorithm uses elliptic curves and is used by the NSA for digital signature generation and key exchange?", a:"Elliptic Curve Cryptography (ECC)", choices:["Elliptic Curve Cryptography (ECC)","RSA","Diffie-Hellman","ElGamal"]},
  {type:"mc", q:"Which type of access control consists of policies and procedures focused on personnel and business practices?", a:"Administrative Access Controls", choices:["Administrative Access Controls","Physical Access Controls","Logical Access Controls","Technical Controls"]},
  {type:"mc", q:"Which type of security control acts to restore a system back to a state of CIA after a threat occurs?", a:"Corrective Controls", choices:["Corrective Controls","Preventative Controls","Deterrent Controls","Detective Controls"]},
  {type:"mc", q:"Which type of security control identifies that unauthorized activity has occurred, such as a motion detector?", a:"Detective Controls", choices:["Detective Controls","Preventative Controls","Corrective Controls","Compensative Controls"]},
  {type:"id", q:"This technique conceals a secret message inside another file, such as a graphic or audio file, without attracting attention.", a:"steganography"},
  {type:"id", q:"This technology secures data by replacing sensitive information with a non-sensitive but realistic-looking version.", a:"data masking"},
  {type:"mc", q:"What is inserted into software as proof of ownership, becoming nonfunctional if removed?", a:"Software Watermark", choices:["Software Watermark","Digital Certificate","Hash Value","Stego-key"]},

  // ---------- CHAPTER 5 ----------
  {type:"mc", q:"Which hashing algorithm developed by Ron Rivest produces a 128-bit hash value?", a:"MD5", choices:["MD5","SHA-256","HMAC","AES"]},
  {type:"mc", q:"Which technique adds a random string of characters to a password before hashing to make it more secure?", a:"Salting", choices:["Salting","Hashing","HMAC","Masking"]},
  {type:"id", q:"This technique strengthens hashing algorithms by adding an additional secret key as input to the hash function.", a:"hmac"},
  {type:"mc", q:"What standard governs the construction of digital certificates and the public key infrastructure?", a:"X.509", choices:["X.509","ISO 27001","RFC 1918","AES-256"]},
  {type:"id", q:"This refers to the policies, roles, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.", a:"pki"},
  {type:"mc", q:"Which database integrity rule states that every row must have a unique, non-null primary key?", a:"Entity Integrity", choices:["Entity Integrity","Domain Integrity","Referential Integrity","User-defined Integrity"]},
  {type:"mc", q:"Which database integrity rule ensures relationships between tables remain consistent, preventing deletion of referenced records?", a:"Referential Integrity", choices:["Referential Integrity","Entity Integrity","Domain Integrity","Validation Rule"]},
  {type:"mc", q:"Which database integrity rule ensures all data in a column follows the same format and definition?", a:"Domain Integrity", choices:["Domain Integrity","Entity Integrity","Referential Integrity","User-defined Integrity"]},

  // ---------- CHAPTER 6 ----------
  {type:"mc", q:"What percentage of uptime corresponds to the 'five nines' availability standard?", a:"99.999%", choices:["99.999%","99.9%","99%","100%"]},
  {type:"mc", q:"Approximately how much annual downtime is allowed under a five nines (99.999%) availability standard?", a:"About 5 minutes", choices:["About 5 minutes","About 1 hour","About 1 day","About 1 week"]},
  {type:"mc", q:"Which RAID method writes data across multiple drives to improve performance?", a:"Striping", choices:["Striping","Mirroring","Parity","Redundancy"]},
  {type:"mc", q:"Which RAID method stores duplicate data on a second drive?", a:"Mirroring", choices:["Mirroring","Striping","Parity","N+1"]},
  {type:"mc", q:"Which RAID method is used to detect data errors?", a:"Parity", choices:["Parity","Mirroring","Striping","Redundancy"]},
  {type:"id", q:"This redundancy concept ensures system availability by having at least one backup component beyond what's needed, like a spare tire.", a:"n+1 redundancy"},
  {type:"mc", q:"Which protocol prevents loops on a network when switches interconnect via multiple redundant paths?", a:"Spanning Tree Protocol (STP)", choices:["Spanning Tree Protocol (STP)","HSRP","VRRP","GLBP"]},
  {type:"mc", q:"Which router redundancy protocol elects a 'virtual router master' with other routers acting as backups?", a:"Virtual Router Redundancy Protocol (VRRP)", choices:["Virtual Router Redundancy Protocol (VRRP)","Hot Standby Router Protocol (HSRP)","Spanning Tree Protocol (STP)","Gateway Load Balancing Protocol (GLBP)"]},
  {type:"mc", q:"Which team is typically assembled to manage an organization's response to a security incident?", a:"CSIRT (Computer Security Incident Response Team)", choices:["CSIRT (Computer Security Incident Response Team)","NOC (Network Operation Center)","ISMS Committee","Vulnerability Broker Team"]},
  {type:"mc", q:"Which incident response phase involves planning ahead for potential incidents before they happen?", a:"Preparation", choices:["Preparation","Detection and Analysis","Containment, Eradication, and Recovery","Post-Incident Follow-Up"]},
  {type:"mc", q:"Which technology operates in inline mode and can detect and immediately address a network problem?", a:"Intrusion Prevention System (IPS)", choices:["Intrusion Prevention System (IPS)","Intrusion Detection System (IDS)","NetFlow","NAC"]},
  {type:"mc", q:"Which type of disaster includes earthquakes, landslides, and tsunamis?", a:"Geological disaster", choices:["Geological disaster","Meteorological disaster","Health disaster","Human-caused disaster"]},

  // ---------- CHAPTER 7 ----------
  {type:"mc", q:"Which secure protocol should replace Telnet for remote management connections?", a:"SSH (Secure Shell)", choices:["SSH (Secure Shell)","FTP","HTTP","SNMP v1"]},
  {type:"mc", q:"Which protocol securely transfers files between two remote systems using SSH for authentication?", a:"SCP (Secure Copy)", choices:["SCP (Secure Copy)","Telnet","FTP","TFTP"]},
  {type:"mc", q:"Which solution freezes a hard drive partition so that no changes are saved after a restart?", a:"Deep Freeze", choices:["Deep Freeze","Disk Cloning","File Encryption","RAID"]},
  {type:"id", q:"This radio-wave technology is used to identify and track inventory objects using attached tags.", a:"rfid"},
  {type:"mc", q:"Which device groups computers logically within a LAN using logical rather than physical connections?", a:"VLAN", choices:["VLAN","VPN","NOC","NAC"]},
  {type:"mc", q:"Which location is the central hub for network troubleshooting, performance monitoring, and device management?", a:"Network Operation Center (NOC)", choices:["Network Operation Center (NOC)","Data center","Server farm","CSIRT"]},
  {type:"mc", q:"Which physical security control is considered the outermost layer of protection for a facility?", a:"Fencing and Barricades", choices:["Fencing and Barricades","Badges and Access Logs","Biometrics","CCTV Surveillance"]},
  {type:"mc", q:"Accounts that provide elevated, unrestricted access and are prime targets for cyber criminals are called:", a:"Privileged Accounts", choices:["Privileged Accounts","Guest Accounts","Service Accounts","Default Accounts"]},

  // ---------- CHAPTER 8 ----------
  {type:"mc", q:"Which cybersecurity domain is often described as 'the weakest link' in information security?", a:"User Domain", choices:["User Domain","Device Domain","LAN Domain","Application Domain"]},
  {type:"mc", q:"Which domain's common threats include router/firewall misconfiguration and unauthorized network probing over a wide area network?", a:"Private Cloud (WAN) Domain", choices:["Private Cloud (WAN) Domain","LAN Domain","Public Cloud Domain","Device Domain"]},
  {type:"mc", q:"Which domain's threats include account hijacking, compromised credentials, and data breaches?", a:"Public Cloud Domain", choices:["Public Cloud Domain","Private Cloud (WAN) Domain","Physical Facilities Domain","Application Domain"]},
  {type:"mc", q:"Which domain's threats include natural disasters and unauthorized building access (e.g., open lobby)?", a:"Physical Facilities Domain", choices:["Physical Facilities Domain","Application Domain","Device Domain","LAN Domain"]},
  {type:"id", q:"A type of cybercrime where the computer is merely a storage device and not the actual tool used to commit the crime is called:", a:"computer-incidental crime"},
  {type:"mc", q:"Which U.S. repository of standards-based vulnerability data uses the Security Content Automation Protocol (SCAP)?", a:"National Vulnerability Database (NVD)", choices:["National Vulnerability Database (NVD)","CERT","Internet Storm Center","Advanced Cyber Security Center"]},
  {type:"mc", q:"Which testing method involves a cybersecurity specialist hacking a system with the organization's permission to find weaknesses?", a:"Penetration Testing", choices:["Penetration Testing","Vulnerability Scanning","Packet Analysis","Asset Management"]},
  {type:"mc", q:"Which tool automates security auditing by scanning networks and producing a prioritized list of weaknesses?", a:"Vulnerability Scanner", choices:["Vulnerability Scanner","Packet Analyzer","Penetration Test","Firewall"]},
  {type:"mc", q:"Which industry-specific law addresses financial reporting and corporate accountability (regulatory law)?", a:"Sarbanes-Oxley Act (SOX)", choices:["Sarbanes-Oxley Act (SOX)","Gramm-Leach-Bliley Act (GLBA)","HIPAA","COPPA"]},
];
