import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit() {
    this.data = {
      "banner": [
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_InsideEdgeS2LaunchV3/23fb5f31-8df9-48b5-baea-5db0c9cbe7b9._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Office_v1/2efa5ef6-b2f4-4c6f-ab0f-a120fa7d934a._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_2andhalfmen_v1/efa21f30-ca41-4819-8679-04081d7dd3b9._UR3000,600_SX1500_FMjpg_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_GreyAv2/24123796-d452-4f59-85fc-64d78f458623._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Mentalist/en_us-hero_in_mentalist-3000-600._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SharkTankS10/cfbc46fa-90ed-4b37-8902-ca6a509b1f36._UR3000,600_SX3000_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Suits/28e7fe98-001d-44af-951b-a1b30427c219._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_2brokev2/en_us-hero_in_2brokev2-3000-600._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Youngsheldons3/ff624d13-65cf-4b95-ad04-de3202910734._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_mirzapur_v1/6205d974-892a-4c63-8c5b-fa834eede65d._UR3000,600_SX1500_FMwebp_.jpg"
          },
          {
              "img": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_Hanna_Launch/47de5a2e-5571-4ecf-a9da-344bc2630563._UR3000,600_SX1500_FMwebp_.jpg"
          }
      ],
      "Content": [
          {
              "title": "Watch next TV and movies",
              "id": "#WatchnextTVandmovies",
              "FacetCarosal": [
                  {
                      "Slide1": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5f786b87557c159c782569ed7ff1070696c11331f9b1efbfc46945667e2d9201._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Spider-Man: Far from Home",
                                      "Desc": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
                                      "Imdb": "7.6",
                                      "Director": "Jon Watts",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d97705d00ef780f78d73a237e77dd3309a296ae312aa2f61af9c1a022e54defc._V_SX1080_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryCover-rw-RW-1508367501115._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Arjun Reddy",
                                      "Desc": "Arjun Reddy (Vijay Deverakonda) is a Surgeon and the topper of the college. He falls in love with his junior, a Tulu girl (Shalini), who is four years younger to him. Due to some unfortunate incidents, they break up. How life takes them forward forms the rest of the story.",
                                      "Imdb": "8.2",
                                      "Director": "Sandeep Reddy Vanga",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryBackground-rw-RW-1511296887815._Vaf6yLLOfABqTqxUaeFz4YEUBuwxAi_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryCover-rw-RW-1549056669100._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "K.G.F: Chapter 1",
                                      "Desc": "KGF Chapter 1 is a film based on the gold mines that represents absolute power. The film is based on power struggle to rule these fields which eventually becomes one man’s destiny and his final destination.",
                                      "Imdb": "8.2",
                                      "Director": "Prashanth Neel",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryBackground-rw-RW-1573446053071.jpg._VePAXHDiazUuVVO6gPy16YP19wzAyp5tk_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryCover-en-rw-1571420173981._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Men In Black: International",
                                      "Desc": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
                                      "Imdb": "5.6",
                                      "Director": "F. Gary Gray",
                                      "Genres": "Science Fiction, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryBackground-rw-RW-1573468934819.jpg._VlKBDgEpovC8fmeeLS6a6BwzSWhx0m19_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d43ed11a1b78983193f58dea4d003a4e0c93dfd9a2fee41e493ea787c6f34a0f._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Mission: Impossible - Fallout",
                                      "Desc": "Ethan Hunt (Tom Cruise) chooses to save his team over completing a mission, allowing stolen plutonium to fall into the wrong hands. Now, he must partner with a hard-hitting CIA agent (Henry Cavill) in a race against time to stop a nuclear threat",
                                      "Imdb": "7.8",
                                      "Director": "Christopher McQuarrie",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cd47bc3ec964381d88239d240640af2cfe9325ae04674eb377e9a0514e57804e._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/194825bf89943e9e2bdd0f38470bdefe7debb9523b76ac9b942313c712496b10._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Aeronauts",
                                      "Desc": "In 1862, daredevil balloon pilot Amelia Wren (Felicity Jones) teams up with pioneering meteorologist James Glaisher (Eddie Redmayne) to advance human knowledge of the weather and fly higher than",
                                      "Imdb": "6.6",
                                      "Director": "Tom Harper",
                                      "Genres": "Drama, Adventure, Romance",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a778c30074779be35bddd333a9b3fd58679ad966cd3ba28727b8e8d127821fac._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide2": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-KG150700000_IN-Full-Image_GalleryCover-rw-RW-1558989533285._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Into The Spider-Verse",
                                      "Desc": "Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.",
                                      "Imdb": "8.4",
                                      "Director": "Bob Persichetti, Peter Ramsey",
                                      "Genres": "Animation, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitlec2g0hvvjfh3an7xq5v3qy42nfg95._VwOvmcZthq4eB4kIA19xK46JGuNTJdoT0_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryCover-en-rw-1556631321466._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Kavaludaari",
                                      "Desc": "The accidental discovery of human bones during a road-widening project leads a local traffic cop into the mystery of a 40-year-old case. His investigation leads him across trails that will put his wit, resolve and morals to the test.",
                                      "Imdb": "8.1",
                                      "Director": "Hemanth M Rao",
                                      "Genres": "Suspense, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryBackground-rw-RW-1573541391275.jpg._VUn8H38CGCN2ofPwc4Bw5ILDArrFu2_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/73a37fada9a30e3f99b96983082c44dd81d089a91a55f6fbab4b766bea7d5a4b._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Top Gun",
                                      "Desc": "Tom Cruise is superb as Maverick Mitchell, a young flyer who’s out to become the best. And Kelly McGillis plays the instructor who teaches Maverick a few things you can’t learn in a classroom.",
                                      "Imdb": "6.6",
                                      "Director": "Tony Scott",
                                      "Genres": "Drama, Action",
                                      "bg-img": "https://image.insider.com/5d32189636e03c09086c9e83?width=1600&format=jpeg&auto=webp"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/dreamwarrior-Maanagaram_DWP_2017-Full-Image_GalleryCover-hi-IN-1495211667145._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Maanagaram",
                                      "Desc": "A City based thriller that travels on the Hyperlink plot connecting the four youngsters from the different walks of lives. Maanagaram will focalize upon Chennai city as one of the major characters in this film, where the backdrops would indeed become a prominent ingredient of this tale.",
                                      "Imdb": "8.2",
                                      "Director": "Lokesh Kanagaraj",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitledagnx27h7h0kdfj0vy9kkymd69kf._VMYHFlzOxF8q4VqtYMRs4616g4pDa6o9_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d308ed16c1e98c5cba5c45cc0ce24b4bb401d8166ec0f9179812c20dfc944a61._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Jallikattu",
                                      "Desc": "Set in a remote village in the hill ranges of Kerala, Jallikattu unfolds during the course of a day and night. The events are set off when a butcher’s buffalo breaks free and runs amok.",
                                      "Imdb": "7.8",
                                      "Director": "Lijo Jose Pellissery",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b3fec079b1de222c75b438c14eb8c856b49f07c439a833bf39f4ba407ae7e8b4._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/wb-2045078_6000112291_IN-Full-Image_GalleryCover-en-rw-1566934007192._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aquaman",
                                      "Desc": "From James Wan comes Aquaman, an incredible subaquatic installment of the DCEU starring Jason Momoa as the classic hero of the seven seas.",
                                      "Imdb": "7.0",
                                      "Director": "James Wan",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/hbo_la-343694-Full-Image_GalleryBackground-rw-RW-1573469770955.jpg._VwlXCQ1vFMeHl1ytXDz0XztdtNu5m2Z_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide3": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b03628ccddfd7b0882fcf7a9bcdbbffb747bc013ba2b98441bc144cd36b6523e._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "George Reddy",
                                      "Desc": "George Reddy is a Biopic of a student leader, Boxer and Gold medallist who influenced Andhra Pradesh politics in Osmania University between 1962 and 1972. He inspired revolutionary thoughts until he was brutally murdered in his hostel in 1972.",
                                      "Imdb": "7.3",
                                      "Director": "B. Jeevan Reddy",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bd29bb67a603eb576b7ca10b656393b1fad1ed480827098ab620e1e7501470e5._V_SX1620_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c05326f51ecb5ec7a6cd95f54e36b70a19043825dd1da1977fd5f04bb4dbce6c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aadai",
                                      "Desc": "A free-spirited girl gets the shock of her life when she finds herself without any clothes in an abandoned building after a late-night party.",
                                      "Imdb": "6.3",
                                      "Director": "Rathna Kumar",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/736d3b8a1df400953bd8e0921a6d39b56ccc3147d9cc233119293a5eaaf32e09._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryCover-rw-RW-1524863226222._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Sonu Ke Titu Ki Sweety",
                                      "Desc": "Sonu and Titu are childhood friends. Titu has always been a naive lover, who falls in love easily and Sonu has always had to step in to save him.",
                                      "Imdb": "7.1",
                                      "Director": "Luv Ranjan",
                                      "Genres": "International, Comedy",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryBackground-rw-RW-1524863228564._VWyvYzVqactlFglxnmCBRzTV8SJ2fxgv_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8d7fe1e1fbe63b5fb3cecabb44f41b6e1e330335c9860a40f4a8b6489b12c9a._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Evaru",
                                      "Desc": "When a high-ranking police official is killed by his alleged rape victim, Sub-inspector Vikram Vasudev is entrusted with investigating what seems like an open-and-shut case.",
                                      "Imdb": "8.3",
                                      "Director": "Venkat Ramji",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9d39dad87629eae96b561fc8860325b3e61648321205c03e5f439aa4ed582fef._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/18baef980968026a21af33cb1d576227e1365684fa86b898aad11cf96ab13e41._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Godfather",
                                      "Desc": "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
                                      "Imdb": "9.2",
                                      "Director": "Francis Ford Coppola",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/662ac6f33dcb187d155452dd7b62046046447250975ffb08c6c2d61ef2470b41._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/20084b97f01db74a6d4cd3e7a07e74407decce42cb0449c9b39a89778847f40c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Dhruvangal Pathinaru",
                                      "Desc": "Deepak retires after an accident cuts off his right leg. Five years down the line, he is forced to revisit all the events leading to the accident.",
                                      "Imdb": "8.4",
                                      "Director": "Karthick Naren",
                                      "Genres": "International, Suspense",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3946b521436645ff94e32795f026a6b05765cd2a627197951fde25f37d0df89d._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "title": "Recommended movies",
              "id": "#Recommendedmovies",
              "FacetCarosal": [
                  {
                      "Slide1": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-KG150700000_IN-Full-Image_GalleryCover-rw-RW-1558989533285._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Into The Spider-Verse",
                                      "Desc": "Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.",
                                      "Imdb": "8.4",
                                      "Director": "Bob Persichetti, Peter Ramsey",
                                      "Genres": "Animation, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitlec2g0hvvjfh3an7xq5v3qy42nfg95._VwOvmcZthq4eB4kIA19xK46JGuNTJdoT0_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryCover-en-rw-1556631321466._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Kavaludaari",
                                      "Desc": "The accidental discovery of human bones during a road-widening project leads a local traffic cop into the mystery of a 40-year-old case. His investigation leads him across trails that will put his wit, resolve and morals to the test.",
                                      "Imdb": "8.1",
                                      "Director": "Hemanth M Rao",
                                      "Genres": "Suspense, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryBackground-rw-RW-1573541391275.jpg._VUn8H38CGCN2ofPwc4Bw5ILDArrFu2_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/73a37fada9a30e3f99b96983082c44dd81d089a91a55f6fbab4b766bea7d5a4b._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Top Gun",
                                      "Desc": "Tom Cruise is superb as Maverick Mitchell, a young flyer who’s out to become the best. And Kelly McGillis plays the instructor who teaches Maverick a few things you can’t learn in a classroom.",
                                      "Imdb": "6.6",
                                      "Director": "Tony Scott",
                                      "Genres": "Drama, Action",
                                      "bg-img": "https://image.insider.com/5d32189636e03c09086c9e83?width=1600&format=jpeg&auto=webp"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/dreamwarrior-Maanagaram_DWP_2017-Full-Image_GalleryCover-hi-IN-1495211667145._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Maanagaram",
                                      "Desc": "A City based thriller that travels on the Hyperlink plot connecting the four youngsters from the different walks of lives. Maanagaram will focalize upon Chennai city as one of the major characters in this film, where the backdrops would indeed become a prominent ingredient of this tale.",
                                      "Imdb": "8.2",
                                      "Director": "Lokesh Kanagaraj",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitledagnx27h7h0kdfj0vy9kkymd69kf._VMYHFlzOxF8q4VqtYMRs4616g4pDa6o9_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d308ed16c1e98c5cba5c45cc0ce24b4bb401d8166ec0f9179812c20dfc944a61._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Jallikattu",
                                      "Desc": "Set in a remote village in the hill ranges of Kerala, Jallikattu unfolds during the course of a day and night. The events are set off when a butcher’s buffalo breaks free and runs amok.",
                                      "Imdb": "7.8",
                                      "Director": "Lijo Jose Pellissery",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b3fec079b1de222c75b438c14eb8c856b49f07c439a833bf39f4ba407ae7e8b4._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/wb-2045078_6000112291_IN-Full-Image_GalleryCover-en-rw-1566934007192._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aquaman",
                                      "Desc": "From James Wan comes Aquaman, an incredible subaquatic installment of the DCEU starring Jason Momoa as the classic hero of the seven seas.",
                                      "Imdb": "7.0",
                                      "Director": "James Wan",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/hbo_la-343694-Full-Image_GalleryBackground-rw-RW-1573469770955.jpg._VwlXCQ1vFMeHl1ytXDz0XztdtNu5m2Z_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide2": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b03628ccddfd7b0882fcf7a9bcdbbffb747bc013ba2b98441bc144cd36b6523e._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "George Reddy",
                                      "Desc": "George Reddy is a Biopic of a student leader, Boxer and Gold medallist who influenced Andhra Pradesh politics in Osmania University between 1962 and 1972. He inspired revolutionary thoughts until he was brutally murdered in his hostel in 1972.",
                                      "Imdb": "7.3",
                                      "Director": "B. Jeevan Reddy",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bd29bb67a603eb576b7ca10b656393b1fad1ed480827098ab620e1e7501470e5._V_SX1620_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c05326f51ecb5ec7a6cd95f54e36b70a19043825dd1da1977fd5f04bb4dbce6c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aadai",
                                      "Desc": "A free-spirited girl gets the shock of her life when she finds herself without any clothes in an abandoned building after a late-night party.",
                                      "Imdb": "6.3",
                                      "Director": "Rathna Kumar",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/736d3b8a1df400953bd8e0921a6d39b56ccc3147d9cc233119293a5eaaf32e09._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryCover-rw-RW-1524863226222._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Sonu Ke Titu Ki Sweety",
                                      "Desc": "Sonu and Titu are childhood friends. Titu has always been a naive lover, who falls in love easily and Sonu has always had to step in to save him.",
                                      "Imdb": "7.1",
                                      "Director": "Luv Ranjan",
                                      "Genres": "International, Comedy",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryBackground-rw-RW-1524863228564._VWyvYzVqactlFglxnmCBRzTV8SJ2fxgv_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8d7fe1e1fbe63b5fb3cecabb44f41b6e1e330335c9860a40f4a8b6489b12c9a._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Evaru",
                                      "Desc": "When a high-ranking police official is killed by his alleged rape victim, Sub-inspector Vikram Vasudev is entrusted with investigating what seems like an open-and-shut case.",
                                      "Imdb": "8.3",
                                      "Director": "Venkat Ramji",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9d39dad87629eae96b561fc8860325b3e61648321205c03e5f439aa4ed582fef._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/18baef980968026a21af33cb1d576227e1365684fa86b898aad11cf96ab13e41._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Godfather",
                                      "Desc": "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
                                      "Imdb": "9.2",
                                      "Director": "Francis Ford Coppola",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/662ac6f33dcb187d155452dd7b62046046447250975ffb08c6c2d61ef2470b41._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/20084b97f01db74a6d4cd3e7a07e74407decce42cb0449c9b39a89778847f40c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Dhruvangal Pathinaru",
                                      "Desc": "Deepak retires after an accident cuts off his right leg. Five years down the line, he is forced to revisit all the events leading to the accident.",
                                      "Imdb": "8.4",
                                      "Director": "Karthick Naren",
                                      "Genres": "International, Suspense",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3946b521436645ff94e32795f026a6b05765cd2a627197951fde25f37d0df89d._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide3": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5f786b87557c159c782569ed7ff1070696c11331f9b1efbfc46945667e2d9201._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Spider-Man: Far from Home",
                                      "Desc": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
                                      "Imdb": "7.6",
                                      "Director": "Jon Watts",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d97705d00ef780f78d73a237e77dd3309a296ae312aa2f61af9c1a022e54defc._V_SX1080_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryCover-rw-RW-1508367501115._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Arjun Reddy",
                                      "Desc": "Arjun Reddy (Vijay Deverakonda) is a Surgeon and the topper of the college. He falls in love with his junior, a Tulu girl (Shalini), who is four years younger to him. Due to some unfortunate incidents, they break up. How life takes them forward forms the rest of the story.",
                                      "Imdb": "8.2",
                                      "Director": "Sandeep Reddy Vanga",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryBackground-rw-RW-1511296887815._Vaf6yLLOfABqTqxUaeFz4YEUBuwxAi_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryCover-rw-RW-1549056669100._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "K.G.F: Chapter 1",
                                      "Desc": "KGF Chapter 1 is a film based on the gold mines that represents absolute power. The film is based on power struggle to rule these fields which eventually becomes one man’s destiny and his final destination.",
                                      "Imdb": "8.2",
                                      "Director": "Prashanth Neel",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryBackground-rw-RW-1573446053071.jpg._VePAXHDiazUuVVO6gPy16YP19wzAyp5tk_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryCover-en-rw-1571420173981._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Men In Black: International",
                                      "Desc": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
                                      "Imdb": "5.6",
                                      "Director": "F. Gary Gray",
                                      "Genres": "Science Fiction, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryBackground-rw-RW-1573468934819.jpg._VlKBDgEpovC8fmeeLS6a6BwzSWhx0m19_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d43ed11a1b78983193f58dea4d003a4e0c93dfd9a2fee41e493ea787c6f34a0f._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Mission: Impossible - Fallout",
                                      "Desc": "Ethan Hunt (Tom Cruise) chooses to save his team over completing a mission, allowing stolen plutonium to fall into the wrong hands. Now, he must partner with a hard-hitting CIA agent (Henry Cavill) in a race against time to stop a nuclear threat",
                                      "Imdb": "7.8",
                                      "Director": "Christopher McQuarrie",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cd47bc3ec964381d88239d240640af2cfe9325ae04674eb377e9a0514e57804e._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/194825bf89943e9e2bdd0f38470bdefe7debb9523b76ac9b942313c712496b10._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Aeronauts",
                                      "Desc": "In 1862, daredevil balloon pilot Amelia Wren (Felicity Jones) teams up with pioneering meteorologist James Glaisher (Eddie Redmayne) to advance human knowledge of the weather and fly higher than",
                                      "Imdb": "6.6",
                                      "Director": "Tom Harper",
                                      "Genres": "Drama, Adventure, Romance",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a778c30074779be35bddd333a9b3fd58679ad966cd3ba28727b8e8d127821fac._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "title": "Latest movies",
              "id": "#Latestmovies",
              "FacetCarosal": [
                  {
                      "Slide1": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b03628ccddfd7b0882fcf7a9bcdbbffb747bc013ba2b98441bc144cd36b6523e._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "George Reddy",
                                      "Desc": "George Reddy is a Biopic of a student leader, Boxer and Gold medallist who influenced Andhra Pradesh politics in Osmania University between 1962 and 1972. He inspired revolutionary thoughts until he was brutally murdered in his hostel in 1972.",
                                      "Imdb": "7.3",
                                      "Director": "B. Jeevan Reddy",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bd29bb67a603eb576b7ca10b656393b1fad1ed480827098ab620e1e7501470e5._V_SX1620_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c05326f51ecb5ec7a6cd95f54e36b70a19043825dd1da1977fd5f04bb4dbce6c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aadai",
                                      "Desc": "A free-spirited girl gets the shock of her life when she finds herself without any clothes in an abandoned building after a late-night party.",
                                      "Imdb": "6.3",
                                      "Director": "Rathna Kumar",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/736d3b8a1df400953bd8e0921a6d39b56ccc3147d9cc233119293a5eaaf32e09._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryCover-rw-RW-1524863226222._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Sonu Ke Titu Ki Sweety",
                                      "Desc": "Sonu and Titu are childhood friends. Titu has always been a naive lover, who falls in love easily and Sonu has always had to step in to save him.",
                                      "Imdb": "7.1",
                                      "Director": "Luv Ranjan",
                                      "Genres": "International, Comedy",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/tseries-Sonu_Ke_Titu_Ki_Sweety_2018-Full-Image_GalleryBackground-rw-RW-1524863228564._VWyvYzVqactlFglxnmCBRzTV8SJ2fxgv_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8d7fe1e1fbe63b5fb3cecabb44f41b6e1e330335c9860a40f4a8b6489b12c9a._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Evaru",
                                      "Desc": "When a high-ranking police official is killed by his alleged rape victim, Sub-inspector Vikram Vasudev is entrusted with investigating what seems like an open-and-shut case.",
                                      "Imdb": "8.3",
                                      "Director": "Venkat Ramji",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9d39dad87629eae96b561fc8860325b3e61648321205c03e5f439aa4ed582fef._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/18baef980968026a21af33cb1d576227e1365684fa86b898aad11cf96ab13e41._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Godfather",
                                      "Desc": "A chilling portrait of the Corleone family's rise and near fall from power in America along with balancing the story of the Sicilian clan's ugly crime business in which they are engaged.",
                                      "Imdb": "9.2",
                                      "Director": "Francis Ford Coppola",
                                      "Genres": "Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/662ac6f33dcb187d155452dd7b62046046447250975ffb08c6c2d61ef2470b41._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/20084b97f01db74a6d4cd3e7a07e74407decce42cb0449c9b39a89778847f40c._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Dhruvangal Pathinaru",
                                      "Desc": "Deepak retires after an accident cuts off his right leg. Five years down the line, he is forced to revisit all the events leading to the accident.",
                                      "Imdb": "8.4",
                                      "Director": "Karthick Naren",
                                      "Genres": "International, Suspense",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3946b521436645ff94e32795f026a6b05765cd2a627197951fde25f37d0df89d._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide2": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5f786b87557c159c782569ed7ff1070696c11331f9b1efbfc46945667e2d9201._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Spider-Man: Far from Home",
                                      "Desc": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
                                      "Imdb": "7.6",
                                      "Director": "Jon Watts",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d97705d00ef780f78d73a237e77dd3309a296ae312aa2f61af9c1a022e54defc._V_SX1080_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryCover-rw-RW-1508367501115._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Arjun Reddy",
                                      "Desc": "Arjun Reddy (Vijay Deverakonda) is a Surgeon and the topper of the college. He falls in love with his junior, a Tulu girl (Shalini), who is four years younger to him. Due to some unfortunate incidents, they break up. How life takes them forward forms the rest of the story.",
                                      "Imdb": "8.2",
                                      "Director": "Sandeep Reddy Vanga",
                                      "Genres": "International, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/mango_mass-MMM_Arjun_Reddy_UC_2017-Full-Image_GalleryBackground-rw-RW-1511296887815._Vaf6yLLOfABqTqxUaeFz4YEUBuwxAi_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryCover-rw-RW-1549056669100._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "K.G.F: Chapter 1",
                                      "Desc": "KGF Chapter 1 is a film based on the gold mines that represents absolute power. The film is based on power struggle to rule these fields which eventually becomes one man’s destiny and his final destination.",
                                      "Imdb": "8.2",
                                      "Director": "Prashanth Neel",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/excel-KGF_KANNADA-Full-Image_GalleryBackground-rw-RW-1573446053071.jpg._VePAXHDiazUuVVO6gPy16YP19wzAyp5tk_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryCover-en-rw-1571420173981._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Men In Black: International",
                                      "Desc": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
                                      "Imdb": "5.6",
                                      "Director": "F. Gary Gray",
                                      "Genres": "Science Fiction, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-F3400700000-Full-Image_GalleryBackground-rw-RW-1573468934819.jpg._VlKBDgEpovC8fmeeLS6a6BwzSWhx0m19_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d43ed11a1b78983193f58dea4d003a4e0c93dfd9a2fee41e493ea787c6f34a0f._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Mission: Impossible - Fallout",
                                      "Desc": "Ethan Hunt (Tom Cruise) chooses to save his team over completing a mission, allowing stolen plutonium to fall into the wrong hands. Now, he must partner with a hard-hitting CIA agent (Henry Cavill) in a race against time to stop a nuclear threat",
                                      "Imdb": "7.8",
                                      "Director": "Christopher McQuarrie",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cd47bc3ec964381d88239d240640af2cfe9325ae04674eb377e9a0514e57804e._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/194825bf89943e9e2bdd0f38470bdefe7debb9523b76ac9b942313c712496b10._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "The Aeronauts",
                                      "Desc": "In 1862, daredevil balloon pilot Amelia Wren (Felicity Jones) teams up with pioneering meteorologist James Glaisher (Eddie Redmayne) to advance human knowledge of the weather and fly higher than",
                                      "Imdb": "6.6",
                                      "Director": "Tom Harper",
                                      "Genres": "Drama, Adventure, Romance",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a778c30074779be35bddd333a9b3fd58679ad966cd3ba28727b8e8d127821fac._V_SX2160_.jpg"
                                  }
                              ]
                          }
                      ],
                      "Slide3": [
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/sphe-KG150700000_IN-Full-Image_GalleryCover-rw-RW-1558989533285._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Into The Spider-Verse",
                                      "Desc": "Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.",
                                      "Imdb": "8.4",
                                      "Director": "Bob Persichetti, Peter Ramsey",
                                      "Genres": "Animation, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitlec2g0hvvjfh3an7xq5v3qy42nfg95._VwOvmcZthq4eB4kIA19xK46JGuNTJdoT0_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryCover-en-rw-1556631321466._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Kavaludaari",
                                      "Desc": "The accidental discovery of human bones during a road-widening project leads a local traffic cop into the mystery of a 40-year-old case. His investigation leads him across trails that will put his wit, resolve and morals to the test.",
                                      "Imdb": "8.1",
                                      "Director": "Hemanth M Rao",
                                      "Genres": "Suspense, Drama",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/prkp-kav_2019-Full-Image_GalleryBackground-rw-RW-1573541391275.jpg._VUn8H38CGCN2ofPwc4Bw5ILDArrFu2_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/73a37fada9a30e3f99b96983082c44dd81d089a91a55f6fbab4b766bea7d5a4b._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Top Gun",
                                      "Desc": "Tom Cruise is superb as Maverick Mitchell, a young flyer who’s out to become the best. And Kelly McGillis plays the instructor who teaches Maverick a few things you can’t learn in a classroom.",
                                      "Imdb": "6.6",
                                      "Director": "Tony Scott",
                                      "Genres": "Drama, Action",
                                      "bg-img": "https://image.insider.com/5d32189636e03c09086c9e83?width=1600&format=jpeg&auto=webp"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/dreamwarrior-Maanagaram_DWP_2017-Full-Image_GalleryCover-hi-IN-1495211667145._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Maanagaram",
                                      "Desc": "A City based thriller that travels on the Hyperlink plot connecting the four youngsters from the different walks of lives. Maanagaram will focalize upon Chennai city as one of the major characters in this film, where the backdrops would indeed become a prominent ingredient of this tale.",
                                      "Imdb": "8.2",
                                      "Director": "Lokesh Kanagaraj",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/AmazonOriginals/urnamazoncatalogtitledagnx27h7h0kdfj0vy9kkymd69kf._VMYHFlzOxF8q4VqtYMRs4616g4pDa6o9_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d308ed16c1e98c5cba5c45cc0ce24b4bb401d8166ec0f9179812c20dfc944a61._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Jallikattu",
                                      "Desc": "Set in a remote village in the hill ranges of Kerala, Jallikattu unfolds during the course of a day and night. The events are set off when a butcher’s buffalo breaks free and runs amok.",
                                      "Imdb": "7.8",
                                      "Director": "Lijo Jose Pellissery",
                                      "Genres": "International, Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b3fec079b1de222c75b438c14eb8c856b49f07c439a833bf39f4ba407ae7e8b4._V_SX2160_.jpg"
                                  }
                              ]
                          },
                          {
                              "img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/wb-2045078_6000112291_IN-Full-Image_GalleryCover-en-rw-1566934007192._UR1920,1080_RI_SX356_FMwebp_.jpg",
                              "content": [
                                  {
                                      "Title": "Aquaman",
                                      "Desc": "From James Wan comes Aquaman, an incredible subaquatic installment of the DCEU starring Jason Momoa as the classic hero of the seven seas.",
                                      "Imdb": "7.0",
                                      "Director": "James Wan",
                                      "Genres": "Action",
                                      "bg-img": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/hbo_la-343694-Full-Image_GalleryBackground-rw-RW-1573469770955.jpg._VwlXCQ1vFMeHl1ytXDz0XztdtNu5m2Z_SX2160_.jpg"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  };
  }

}
