module Striker
	module Tags
		class TwitterShare < Liquid::Tag

			def initialize(tag, markup, tokens)
				super
			end

			def render(context)
				site = context.environments[0]['site']
				page = context.environments[0]['page']
				hashtags = page['tags'].map{ |tag| tag['name'].strip }.join(",")
				<<-TWITTERSHARE
					<a href="#" onclick="javascript:window.open('http://twitter.com/share?url=#{site['url']}#{page['url']}&text=#{site['name']} -  #{page['title']}&via=smswaroop&hashtags=#{hashtags}', '', 'width=650, height=350')">tweet</a>
				TWITTERSHARE
			end

		end
	end
end

Liquid::Template.register_tag('tweetshare', Striker::Tags::TwitterShare)
