export const daysButton = ["24 Hrs", "All Time"];
export const tableHeadings = ["Collections", "Volume", "Floor price"];
export const data = [
	{
		id: 1,
		name: "Celestial Spirits",
		price: "90 XRP",
		volume: "1.7k",
		image: "/images/Art.png",
	},
	{
		id: 2,
		name: "MoonWorld: Humans",
		price: "777 XRP",
		volume: "1k",
		image: "/images/collection-img-2.png",
	},
	{
		id: 3,
		name: "Red Ball",
		price: "3 XRP",
		volume: "900",
		image: "/images/red-ball-img.png",
	},
	{
		id: 4,
		name: "AI Dude",
		price: "15 XRP",
		volume: "760 ",
		image: "/images/ai-dude-img.png",
	},
	{
		id: 5,
		name: "Pixel World",
		price: "150 XRP",
		volume: "500",
		image: "/images/pixel-world-img.png",
	},
];
export const collectionsListsData = [
	{
		id: 6,
		name: "Crazy Professor",
		price: "200 XRP",
		volume: "467",
		image: "/images/nft-img-4.png",
	},
	{
		id: 7,
		name: "Monsters World",
		price: "87 XRP",
		volume: "320",
		image: "/images/nft-img-3.png",
	},
	{
		id: 8,
		name: "Eye Buddies",
		price: "80 XRP",
		volume: "250",
		image: "/images/nft-img-2.png",
	},
	{
		id: 9,
		name: "xCubes  ",
		price: "100 XRP",
		volume: "211",
		image: "/images/nft-img-1.png",
	},
	{
		id: 10,
		name: "Funk Town",
		price: "130 XRP",
		volume: "130",
		image: "/images/funk-town-img.png",
	},
];
export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1300 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 1300, min: 900 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 900, min: 600 },
		items: 2,
		centerMode: true,
	},
	mobile: {
		centerMode: true,
		breakpoint: { max: 600, min: 0 },
		items: 1,
	},
};
export const service_responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1300 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 1300, min: 900 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 900, min: 600 },
		items: 2,
		centerMode: true,
	},
	mobile: {
		centerMode: true,
		breakpoint: { max: 600, min: 0 },
		items: 1,
	},
};
export const homeResponsivess = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export const responsive_mint = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1200 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 1200, min: 900 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 900, min: 600 },
		items: 2,
		centerMode: true,
		minimumTouchDrag: 80,
	},
	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 1,
		centerMode: true,
		minimumTouchDrag: 80,
	},
};

export const slider_settings = ({xs=1, sm= 1, md= 3, lg= 4  }) => ({
	dots: false,
	infinite: true,
	speed: 500,	
	slidesToShow: lg,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: "24px",
	swipeToSlide: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 10000,
			settings: {
				slidesToShow: lg,
				slidesToScroll: 1,
				dots: false,
				arrows: false,
				centerMode: false,
				infinite: true,
				swipeToSlide: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: md,
				slidesToScroll: 1,
				centerMode: false,
				dots: false,
				arrows: false,
				infinite: true,
				swipeToSlide: true,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: sm,
				slidesToScroll: 1,
				centerMode: true,
				infinite: true,
				dots: false,
				arrows: false,
				swipeToSlide: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: xs,
				slidesToScroll: 1,
				centerMode: true,
				dots: false,
				arrows: false,
				infinite: true,
				swipeToSlide: true,
			},
		},
	],
});

export const launchpad_slider_settings = ({xs=1, sm= 1, md= 3, lg= 4  }) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: lg,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "24px",
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
			slidesToShow: lg,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
			slidesToShow: md,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
			slidesToShow: sm,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
			slidesToShow: xs,
          slidesToScroll: 1,
          centerMode: true,

        }
      }
    ]
  });

