export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  images: string[];
  client: string;
  date: string;
  tools: string[];
  challenges: string;
  solution: string;
  results: string;
}

export const projects: Project[] = [
  {
    id: "mutual-fund-investor-awareness",
    title: "Mutual Fund Investor Awareness",
    description: "Educational marketing materials for financial literacy",
    category: "Marketing",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNhIcPCqG4FgCS62_TvDoz3pGQsjZVIiwBpyCXcmbb00wLTHLc8U-TzTay9XYk20uS6Qh9cyUigBbaG1O7zVYb_sgRInn0psnyZ-jbiEelbbkkC3exbe9T9nB5Qk_A06szNG4htGi-d-37XpKoOGOo5=w945-h945-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczNhIcPCqG4FgCS62_TvDoz3pGQsjZVIiwBpyCXcmbb00wLTHLc8U-TzTay9XYk20uS6Qh9cyUigBbaG1O7zVYb_sgRInn0psnyZ-jbiEelbbkkC3exbe9T9nB5Qk_A06szNG4htGi-d-37XpKoOGOo5=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN51Njx912o3DzcOxr6cUVBZjabKSp4s-C9OEOipYPnMw0WIVY4j0IhAQgdow2AWe9hr8xDMIF4Ml8CSuo63yxyXzN2ZdhhYST30p1YQrSc_pmJxu6o3yPjIp5A6wC0dyTzNlMEXSiy17wdKPfuAgAA=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPCNcepuBikVCsMkplZT8Aig-ANxlg-q8IyuIz8jeqSDGMY30Q-ukmmgYc-bb_OGDTJGW7zyIvEpx-eDsAVAvWHjXmbO5EOj3VmgtS9XM1p-434e9-XLyPOmLRrqZS2diAu6D0dubes22R3Va8e54l_=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPQiY09p94sjJ67HoK_c4YYR7nnyXActk4ZhpglAwVN5kgI_JdF9dBqSCBzuwT7cOyYn3UZWjkx05pEgFBMuMoK8ECGRaXokrMitbuiWh1KzUp9_bjvIpA97boSucz-hDtt7mD_3_GstO_2fVLNWJ7-=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMcg1EKnSKB9Lhl_bMBhT8Xv4Vxrg1pl2OvieHyOLNTYFA9wipgTTg5Hl4T2gNH-FYs0ROQs5hFMWlrQ0zjdDej2TTcp8pWgd5KFgvcSxQKvQK7HQLSg7XS7_FhKf2whagosqijSb_KLvzME3AjSai8=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOD-h_h0BkxoDQ5x7i_AKV8IjeQg_OMoQWyoYaGUe86hO-zzaPFqGBovM1JNXt-VG3wu81hg0M_9MC_tnYzlXFVAzhIjCSDku2D3jk9HPNsgXXGMjsw0PRt2yWBO3OAphMQ0NPWc5yknB0XYUoYGPod=w756-h945-s-no-gm?authuser=0"
    ],
    client: "Mutual Fund India",
    date: "June 2023",
    tools: ["Illustrator", "Photoshop", "Canva"],
    challenges: "Making complex financial concepts visually accessible and engaging.",
    solution: "Created infographic series with clear data visualization and friendly illustrations.",
    results: "60% improvement in investor understanding and 35% increase in program participation."
  },
  {
    id: "craving-makeup-social-campaign",
    title: "Craving for Makeup Social Campaign",
    description: "Complete social media visual identity and campaign design",
    category: "Social Media",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP7ouqHF3AxkCaJzx-CLXZYI7ORKvi2-tuKTZSnodGWp9vkDp8ZY4s-SP0yEv3GW6lHV58j_rZiFkLEIUVC3v_tyRBHZhTX_cvq0NTCGyJlzCvo3MYe_6ES4TmY7Te5VHIeyZ-1zitf4GeY61ufzZaz=w945-h945-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczP7ouqHF3AxkCaJzx-CLXZYI7ORKvi2-tuKTZSnodGWp9vkDp8ZY4s-SP0yEv3GW6lHV58j_rZiFkLEIUVC3v_tyRBHZhTX_cvq0NTCGyJlzCvo3MYe_6ES4TmY7Te5VHIeyZ-1zitf4GeY61ufzZaz=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczM1lt_9gD9zE5Q46iBP2qdSZTg9vqI3up4SIyLIpJghdv9XtE0MRk1A4TbVwergPgwL8EmHUvcEiegzTlVCa0XvzJ9b7EU_qOebjZu8bPq4bUU-cF8ySoRfUoISUdhqc67I7_HbiuNcpMwXxoIR9s_O=w756-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNhcisnObtO4gCEkOwJpcle1O9CAAisCFW7rRFLuxzYEAy4s0PMU6IVsOmHlnZ2sTlHvL9h_upmSHVRJ3nArDdg11Hi7e6gA8beaJ-7PVOgx52uVFeDXXJohwiEjvb40PPhspEmZQ8OkFCDnOegsc1r=w756-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNH_v80Z0Z0Fyl1zYYHZjpvtcUlwOE1PjWfbzI9YNnLc0wf3xl-Akh1jvtxb3b55463LgBK4Zwzazrbzbe1KSloSd5RULyRbcjQflOTMQFlslfTqgdSQVANFPLsZSEPHCtRJ0q0fB4p2kJgakDP7Z8r=w840-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNv-N5XQQOYRkKc_dpe0l0WS01i1e3mcTajlvNSNfnm_ROzc-VXq5fCvR76ClFpSoDLfeuYlvlVEX1ovDxTXJ2mwG0oAbLNNgtKZvVe3BQMkoAKDF5BM1h4DHxri96ypfxhPi_ELjTCQyPideqoqSSK=w945-h945-s-no-gm?authuser=0"
    ],
    client: "Craving for Makeup",
    date: "January 2024",
    tools: ["Canva", "Photoshop", "After Effects"],
    challenges: "Creating cohesive visuals for beauty influencer with diverse content needs.",
    solution: "Designed flexible template system with consistent color palette and typography.",
    results: "200% increase in social media engagement and 150% follower growth."
  },
  {
    id: "swastik-jewelers-festive-campaign",
    title: "Swastik Jewelers Festive Campaign",
    description: "Elegant jewelry visuals and festive campaign graphics",
    category: "Product Design",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPwdyJOoarCAtyX0njjVYgrWA7fPb6lj3n9QDSxlklVaML6G1UCbAdNm2XGy1ba19Sm5V0SsvLG-61AAD3htZvUUF916zwvuxzYqoNBfrIIChoIwYwf6kJc4kbvGvesZiGA6IKfjLobdRA9BPnZGFL_=w945-h945-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPwdyJOoarCAtyX0njjVYgrWA7fPb6lj3n9QDSxlklVaML6G1UCbAdNm2XGy1ba19Sm5V0SsvLG-61AAD3htZvUUF916zwvuxzYqoNBfrIIChoIwYwf6kJc4kbvGvesZiGA6IKfjLobdRA9BPnZGFL_=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczM67aJ8XrCXaxPG1ysFOm_BjBeRvA_umRKgAF6DF4HRNcGHYyRkjuIEe2kfebTR9LbiCdAwann_3njrlWS7p6j_rHgZtAjdYOIIuLR0l04NpPo0dSP7LF9B-78jXoQZXwJxiCspRxenokM6PGVMtpi2=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMJapcXVJRhv0_-hxZUuYDCTJQ7d83x7gm_7j5q0cXn-PxmCE6FD0RIYy3NBLrAOx_YUphLEotxhNFeNa62_Ub7EaNauwXRsb3bBQOtB-BpwK78un0pM1ALzW45nefJkc3JSaA4YosYSAVVffmxH4zr=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMATugSWntb7C9lv57ZBH_V8lW60rIYmiR_vdNvqE1hmihiGa_wmaiohKCiKDRI-Q1vQUkvgppb710NvxgnfVYRv04WMGqqBoMF-Lp45UgdHHzUFKyGuP02XA3RYhi3Va1zmn0Q81V4XnYhLvUFK32h=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNnod6mCEJ7_LOP_tKlFiYz9INItVDgVlUSJ7MS66Y5jjM3XGVNoy_e_UlMxdrOsctbKJPT_MNFBwj8v6Oa28nx2tKa5mc8Op04oABDKf4zLC3Hs830Nmezv6dDQopjlSU8k0fTsTQugGUlsjA2Y69R=w945-h945-s-no-gm?authuser=0"
    ],
    client: "Swastik Jewelers",
    date: "December 2023",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    challenges: "Showcasing intricate jewelry details while maintaining elegant aesthetic.",
    solution: "Created sophisticated lighting effects and premium gold-themed visuals.",
    results: "30% increase in festive season sales and improved brand perception."
  },
  {
    id: "shemfort-school-events",
    title: "Shemfort School Event Campaigns",
    description: "Educational event promotions and academic competition visuals",
    category: "Event Design",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOemla1EcRvWWyuhmHjmLw2nJ5OdwLTDf0hDs5XWKxCxFOQKizfj7uU0PD1SteaL6Yxoum3Ez9lz_T3P9B46zC7At13GMHNuCO_cBWw7nZBKIIeGgRClL8eHzrZ-71fbVW8YXFMa_ztqVAsJd2vqo3D=w666-h945-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczOemla1EcRvWWyuhmHjmLw2nJ5OdwLTDf0hDs5XWKxCxFOQKizfj7uU0PD1SteaL6Yxoum3Ez9lz_T3P9B46zC7At13GMHNuCO_cBWw7nZBKIIeGgRClL8eHzrZ-71fbVW8YXFMa_ztqVAsJd2vqo3D=w666-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMLUzF4HOUoV-z_xAaohLTaZkECFIQ6v9FiHlfR7b3efaVXZQ_Fr0wTFWKSA5K5dEDNDmipCWmiiNaREWFl3qXLEfaySF4p2nC0nwk8GViXsvjAz8H6EbyXBO23JvEAXUez2glEbETAe6OlI4j3nAez=w666-h945-s-no-gm?authuser=0"
    ],
    client: "Shemfort Futuristic School",
    date: "Ongoing 2022-Present",
    tools: ["Canva", "Photoshop", "Illustrator"],
    challenges: "Creating age-appropriate designs that appeal to students, parents, and educators.",
    solution: "Developed vibrant, educational design system with consistent school branding.",
    results: "50% increase in event participation and improved school brand recognition."
  },
  {
    id: "ably-info-solutions-projects",
    title: "Ably Info Solutions Digital Assets",
    description: "Complete digital marketing and web graphics design suite",
    category: "Web Design",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPoruP4Ykk7la4UwlvER2I2ZagKtRbFjXeEsmNeLaSj8lI-2nMbwKJwNXoXMkt23NM824IR1Hq1OgBEMaAT0tTXvjubG_zw5woOjK1LDTM4jK2wMrpOoS8BRwtcZTQlS3cuHX68FYdlu1Yc5mJ1Ix6K=w945-h945-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczPoruP4Ykk7la4UwlvER2I2ZagKtRbFjXeEsmNeLaSj8lI-2nMbwKJwNXoXMkt23NM824IR1Hq1OgBEMaAT0tTXvjubG_zw5woOjK1LDTM4jK2wMrpOoS8BRwtcZTQlS3cuHX68FYdlu1Yc5mJ1Ix6K=w945-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNjyw7stQgmimTmIvlC2GW_5daRcvt-8gB2MRubi5lYmTP2X5A6kGnj6wjuOHomJ6aT1aMF_P6Vl75YAXxyseuTjxcIoszTuyw8sXVYXjuRb1yLuBL_dfHv_XhAjJX5dEe5v8493T3M8mLiZjYf3ZU1=w668-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNvlKgevUqWZMi4rqzfLG_VOfZ_W8Q_hxp8KKWBLIKnxHxnznCDLWd9pnV5jGS-q027c6oIrfaxDR9Hbu2Zhboee7EhV5OzSCl5Zbw6LtWzOv7XUtsAcWU6TsVFAlgeqsI4bVRatu-GGyXJtVsbq0l0=w668-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNJx5K3GLtzOF7i9IZgN7T8uBX0cgw1UAOwArQHemEdkAUV_Gscx0Lw46CMIT7eJIftvx8gYRlnCv3lpP9ZTvvXEErqKUXiC8k6nt0RQ1hAanV2nvEYu9xp6ZVchP-oleY1xRePdDVG0gXDNTDdGqRC=w666-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczO7aKhZHpiwlS9RbCdKwuwrQOTQU1V03y6iN5tJh5R3CgtIKjR2wwq-nrpJTrdaGIbhrDSMDpIwY9UNfUoXCNBmf4h4ZVxY7BSbrx9ohbaJ4CYYNmwI7Ikr6nIPhRZo31Y6U0zSKNMOyqbuVXRJ_wn7=w668-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMBs92QRvPaMpKBpIG3aNZNEoL06njXIVAmi2v9XkIMd7KSbUFwHAk2-orj714U4ZIcb--yGeS2rQvCYKqC-81ZvzmD4u9l1zUli1DUSyFKOdcBfcc5BIyTWHX0r7HZp8rsYSuzSuvd_J6JDS1KBVkK=w668-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMnXYFPHrFz13Z7CTx2pecTrZ6HPTv16rJFavhWY_qgZjIYXElYE7vpAZ-6AOxvQ6RQl0qutukwC97QM_oGpbPtByWOvMqpAltAwjP7KzEvbEe2x2cNB4_5x5mqv_gzZvdSptfIIWI1LhQKFJMY1jP3=w473-h945-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNSxhx6h4mN3nC_V00p2fBRKGiC567UvhbeZaU7OYijjigduJzV-WukGGmw4PF8O_AQl1WwaE7sQJwxZG2iWgn-I2hPozrDRIfzgqSaG6qPMqVYwdr-5ul8u_oY0ZZfglTNN4iYb78ONUq7SynDT0E9=w668-h945-s-no-gm?authuser=0"
    ],
    client: "Ably Info Solutions",
    date: "November 2022 - Present",
    tools: ["Photoshop", "Illustrator", "Figma"],
    challenges: "Designing branded assets and web graphics for digital services company.",
    solution: "Created comprehensive UI/UX support materials with modern design aesthetics.",
    results: "Enhanced brand consistency and improved digital presence across all platforms."
  },
  {
    id: "food-branding-projects",
    title: "Food & Restaurant Branding",
    description: "Creative food packaging and restaurant branding designs",
    category: "Branding",
    image: "https://lh3.googleusercontent.com/pw/AP1GczN1Aqwn3rLlPVRawWCtsFsj0RxsF-6FSut57cK3ju9jf8McwX9u9LDynTYLulZzjqhcJVkeT10fYqEXkRNcsZhuBVV_W6Pn8kX1upTh6LjvNl5kTLWG8ANAv11ZMYhSKk0ZEoIk7FV-SWF-pZ_ieLsY=w736-h736-s-no-gm?authuser=0",
    images: [
      "https://lh3.googleusercontent.com/pw/AP1GczN1Aqwn3rLlPVRawWCtsFsj0RxsF-6FSut57cK3ju9jf8McwX9u9LDynTYLulZzjqhcJVkeT10fYqEXkRNcsZhuBVV_W6Pn8kX1upTh6LjvNl5kTLWG8ANAv11ZMYhSKk0ZEoIk7FV-SWF-pZ_ieLsY=w736-h736-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOLtQzLsdeTdoJ3Ujo2BNsR_TGU5Fn-QXGMYVbIvgBXQcaroWV2IXOw_q1c4p14OKt6P-y_EcUElZHFB_r4SMhCEhqZYh8scofYaLho1-llRiSwbIa1L0vLPitv7jWuSrKVabPMeQHtXqUb35By4L36=w736-h730-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczOLCBR3UeWr7Cfbj0YEzDFOhet8XyxGXJKO9uupe-iwdhna4OJYLGTOEmRtH4U2FIF02CKpiis8XtsmeFKR4Rhl5bIWm2qghZgkHv17XDvW6SYL9QV1U6vMmPcP0dO-k56ZWZa-HonHCdmVmeTZx_2Z=w736-h736-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczN9VBg0YoJbmfcGiK-Srd3buSDhnRvvakvfL08YCuLRfYPaoMg28O8ZJ786VPMSWZTU-iVF5q4IIT3MCwJpkJqcZX-yVSJqeazdZ6qg75zCmxNbdCXt65GzH9jzmFr6W9VJaXfz2fNMqmo2mmJZKDY2=w736-h736-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczNtWqkxM2jTbPYmYnJHUpMuhtxuBi5fFNDAYB1GW3ke54i9aYmaxaNJ3FhndY0CcGs-stm-GhlcRqG7dl_a8fIxQU1L2sTK2OxRNe-6t3xl6QqEaSbDOsFGanonJ2fmNNlkSAwrgugySZv82_hPpxyf=w736-h736-s-no-gm?authuser=0"
    ],
    client: "Various Food Clients",
    date: "2023 - Present",
    tools: ["Illustrator", "Photoshop", "Canva"],
    challenges: "Creating appetizing visuals that drive customer engagement and sales.",
    solution: "Developed vibrant, mouth-watering designs with strong brand personalities.",
    results: "Increased customer attraction and improved brand recognition for multiple food businesses."
  }
];