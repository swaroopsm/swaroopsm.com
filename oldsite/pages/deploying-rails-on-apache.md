---
title: Deploying A Rails Application On Apache
author: Swaroop SM
date: 2013-10-05
template: post
category: blog
permalink:
 style: /:category/:title
 pretty: true
tagged:
 - ruby
 - rails
 - apache
 - web
keywords: deploy, ruby, rails, apache, passenger
---

You have built an awesome application using Ruby on Rails, and have no idea how to make it available to the world wide web.
By the end of this tutorial, you will have your application up and running on Apache. We will be using [passenger](https://www.phusionpassenger.com/) with Apache in this post. So, let's get started. 

#####1. Install Dependecies:
Run `$ bundle install` to install all the gems specified in the Gemfile.

#####2. Database Production Settings & Migrations:
Assuming you are in the root directory of your project, open your `config/database.yml` and edit the username/password in the production section of the file.
Once done run the following commands in sequence:

{% highlight bash %}
	$ bundle exec rake db:create RAILS\_ENV=production
	$ bundle exec rake db:migrate RAILS\_ENV=production
{% endhighlight %}

#####3. Preparing your application
Navigate to your `config/environments/production.rb` and set the following:
{% highlight ruby %}
	config.serve\_static\_assets = true
	config.assets.compile = true
{% endhighlight %}

Run the to compile all your stylesheets and javascripts
{% highlight bash %}
	$ bundle exec rake assets:precompile
{% endhighlight %}

#####4. Install Passenger
This is the gem that does all the magic of deploying our rails application.
{% highlight bash %}
	$ gem install passenger
{% endhighlight %}

#####5. Configure Apache for serving the App
Run the following command:
{% highlight bash %}
	$ passenger-install-apache2-module
{% endhighlight %}

* If there are any dependencies that Apache needs, it prompts and you can install it via your package manager.(then again run: passenger-install-apache2-module).

* Once that is done, the installation will ask you to copy paste some lines into the apache configuration file.

* Restart Apache.

#####6. Setup Virtual Config for Apache
In your sites-available directory of Apache, create a file called, `my_app` and paste the following lines:
{% highlight bash %}
	\<VirtualHost *:80>
		ServerName YOUR_SERVER_NAME
		DocumentRoot /PROJECT\_PATH/public
		\<Directory /PROJECT_PATH/public>
			Options -MultiViews
			AllowOverride All
			Order deny,allow
			Allow from all
		\</Directory>
	\</VirtualHost>
{% endhighlight %}

#####7. Enable your site
`$ sudo a2ensite my_app`

Restart Apache, navigate to your server name and enjoy :)

