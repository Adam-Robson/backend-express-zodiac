const zodiac = [
  {
    id: '1',
    name: 'aquarius',
    dates: 'Jan 21 - Feb 19',
    symbol: 'Water Bearer',
    horoscope: {
      '2022.09.01': 'Going for your major life goals could be a compelling option. As productive as that would be, you may worry that your progress is distancing you from your peers. If the unspoken tension gets to be too much, clearing the air isn\'t a bad idea.You\'re equipped to express yourself in a way that clarifies your motivations as something positive for yourself, not as a slam against anyone else. While bluntly stating the truth can feel awkward, it usually beats stewing in silence!'
    }
  },
  {
    id: '2',
    name: 'aries',
    dates: 'Mar 21 - Apr 19',
    symbol: 'Ram',
    horoscope: {
      '2022.09.01': 'A tempting financial opportunity could be opening up to you.As transformative Venus in your 8th House of Big Money crashes into wounded Chiron in your identity sector, perhaps your biggest obstacle is thinking you don\'t deserve positive change. Alternately, feeling bad about yourself might lure you toward an unwise decision out of desperation. Talking to a friend can help you see the facts more clearly. Ultimately, you\'ll have to make the final call yourself, so take any time you need to thoroughly contemplate things.'
    }
  },
  {
    id: '3',
    name: 'cancer',
    dates: 'Jun 21 - Jul 22',
    symbol: 'Crab',
    horoscope: {
      'November 1, 2022': 'Expressing yourself creatively can bring you lovely rewards -- until the internalized voice of an authority figure rains on your parade. While you may feel ashamed of having doubts that you know are illogical, getting hung up on that aspect of your feelings will probably just get you more stuck. However, thoughtfully engaging with your inhibitions, perhaps by journaling about them, can inspire you and restore your flow. Accept where you\'re at, even if it\'s not where you want to be.'
    }
  },
  {
    id: '4',
    name: 'capricorn',
    dates: 'Dec 22 - Feb 19',
    symbol: 'Goat',
    horoscope: {
      '2022.09.01': 'Having fun with your friends could be a complicated experience today. Perhaps their homes or family lives remind you of what\'s lacking in yours.That said, maybe this is exactly the nudge you need to figure out a way you can improve your situation.Your ability to work hard is at a high point, but you might have to look at whether or not you\'re channeling your efforts in a way that maximizes your rewards. Use this surge of motivation to dig deep!'
    }
  },
  {
    id: '5',
    name: 'gemini',
    dates: 'May 21 - Jun 20',
    symbol: 'Twins',
    horoscope: {
      '2022.09.01': 'You might be feeling good about some changes you\'ve made to your diet or lifestyle lately. Unfortunately, sharing this news with your friends may not go as well as you\'d like.As fortunate Venus in your 6th House of Habits challenges grouchy Chiron in your social sector, you\'re likely to trigger someone else\'s insecurities, probably without meaning to.Instead of letting anyone get you down, focus on studying ways to make your shift even more effective! After all, there\'s always room to refine the details.'
    }
  },
  {
    id: '6',
    name: 'leo',
    dates: 'July 23 - Aug 22',
    symbol: 'Lion',
    horoscope: {
      '2022.09.01': 'Chilling out at home could be comfortable, but you might also be wondering if you\'ve become too boring.While there\'s nothing wrong with pursuing (or not pursuing) adventure for your own reasons, perhaps you\'re primarily reacting against pressure you perceive from others to get out more.You\'re likely especially sensitive to the signals others are putting out at the moment, although projecting your personal anxieties onto your peers is possible too. Your most important quest is determining where you end and they begin.'
    }
  },
  {
    id: '7',
    name: 'libra',
    dates: 'Sept 23 - Oct 22',
    symbol: 'Balance',
    horoscope: {
      '2022.09.01': 'Giving in may be your go-to strategy in a particular relationship, which could make a current surge of self-worth quite uncomfortable! Perhaps it\'s time to look critically at your basic beliefs about how people should interact with each other.When you think through how asserting yourself makes logical sense, you can then feel empowered to actually do it.Changing the dynamic might also be good for the other person in ways you don\'t expect, so try something new -- even if it scares you.'
    }
  },
  {
    id: '8',
    name: 'pisces',
    dates: 'Feb 19 - Mar 20',
    symbol: 'Fish',
    horoscope: {
      '2022.09.01': 'Learning and exploring could sound quite appealing -- until you start looking into the financial side of what you have in mind. While you might feel down on yourself for not being able to afford everything you want to do, you probably have more opportunities for fun than you thought. Relieving boredom may be as simple as digging around in your own home. Perhaps a book you forgot about has finally found its moment to be read, so keep your eyes open for pleasant surprises!'
    }
  },
  {
    id: '9',
    name: 'sagittarius',
    dates: 'Nov 22 - Dec 21',
    symbol: 'Archer',
    horoscope: {
      '09.01.2022': 'You might secretly be proud of something you don\'t usually share with others.Opening up could provoke anxiety, though, as you probably still remember why you kept this information to yourself in the first place.Perhaps sharing doesn\'t have to be an all-or-nothing type of situation -- you can thoughtfully choose which details you include in the story and which people you tell. If you allow yourself to control the narrative, you should be better able to move forward with confidence!'
    }
  },
  {
    id: '10',
    name: 'scorpio',
    dates: 'Oct 23 - Nov 21',
    symbol: 'Scorpion',
    horoscope: {
      '2022.09.01': 'Loving your body is one thing, but living in it is probably another at this time. As sensual Venus in your sign conflicts with awkward Chiron in your 6th House of Health, you might find that aches, pains, or other unfortunate symptoms get in the way of presenting yourself the way you\'d prefer.You may be better off accepting your need for rest instead of doing something more exciting.Ultimately, some recharge could be just what it takes to restore your energy!'
    }
  },
  {
    id: '11',
    name: 'taurus',
    dates: 'Apr 20 - May 20',
    symbol: 'Bull',
    horoscope: {
      '2022.09.01': 'Relating to others could come with some challenges today. While you likely have high hopes for connecting with someone close to you, the moment might be spoiled when they poke one of your sore spots. You may be eager to prove that they\'re objectively wrong, but perhaps nothing is needed beyond your authority on your own experience.Stand up for yourself, but give the other person the benefit of the doubt -- issues like this are probably more about you than they are about them.'
    }
  },
  {
    id: '12',
    name: 'virgo',
    dates: 'Aug 23 - Sep 22',
    symbol: 'Virgin',
    horoscope: {
      '2022.09.01': 'You might really like the idea of a deep conversation today. Before you ask a big question, though, make an effort to be honest with yourself about whether you really want to know the answer -- and why you haven\'t been told the answer already.Do others consider you a safe person to share with? You may need to relax your desire to know every little fact immediately, as that can be intimidating.Keep your focus on the relationship, and you can learn meaningful details.'
    }
  }
];

module.exports = { zodiac };
