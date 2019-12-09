$(function() {
	var now = new Date();
	$('.screen-content')
	.fbMessenger({
			botName: 'Laura Beth Fulton',
			botLogoUrl: 'img/botlaura.png',
			loop:false
		})
	.fbMessenger('start', { delay: 0 })
	.fbMessenger('typingIndicator', { delay: 1000 })
	// .fbMessenger('message', 'bot', 'When I was 6, my sister was half my age. Now, I\'m 26. How old is she?', { timestamp: now, delay: 800 })
	// .fbMessenger('message', 'user', '🤔 🤔', { timestamp: now, delay: 4000 })
	// .fbMessenger('typingIndicator', { delay: 2000 })
	.fbMessenger('message', 'bot', 'Greetings, I\'m <b>Laura</b>!', { timestamp: now, delay: 2500 })

	.fbMessenger('showGenericTemplate', [
	{
	imageUrl: 'img/hey.gif',
	title: '',
	subtitle: '',
	buttons: []
	}
	], { delay: 1500 })

	.fbMessenger('message', 'user', '👋', { timestamp: now, delay: 4000 })
	.fbMessenger('typingIndicator', { delay: 2500 })
	.fbMessenger('message', 'bot', 'My portfolio contains highlights from my recent projects, experience, and research.', {delay: 2000 })
	.fbMessenger('message', 'bot', 'Thanks for visiting!', {timestamp: now, delay:2500})
	.fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	.fbMessenger('showQuickReplies', [
		'<a href="#scroll-to-work" id="work-link">Portfolio</a>',
		// '<a href="https://medium.com/@rachitgupta" target="_blank">Research</a>',
		'<a href="#scroll-to-about">About</a>',
		'<a href="resume.pdf" target="_blank">Resume</a>'
	], { timestamp: now, delay: 1500 })
	// .fbMessenger('scrollQuickReplies', 3, { delay: 2000 })
	// .fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
	// .fbMessenger('scrollQuickReplies', 4, { delay: 1000 })
	// .fbMessenger('selectQuickReply', 2, { delay: 1200 })
	// .fbMessenger('typingIndicator', { delay: 2000 })
	// .fbMessenger('message', 'bot', 'Obvious choice, haha', { timestamp: now, delay: 1000 })
	// .fbMessenger('typingIndicator', { delay: 200 })
	// .fbMessenger('message', 'bot', 'You gotta scroll down now.. DO IT!', { timestamp: now, delay: 800 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })
	// .fbMessenger('message', '', '', { timestamp: now, delay: 0 })

	.fbMessenger('run');
});
