fx_version "adamant"

game "gta5"

client_scripts {
	'config.lua',
	'client/main.lua',
}

server_scripts {
  'config.lua',
  'server/main.lua',
}

ui_page "ui/build/index.html"

files {
	'ui/build/index.html',
  'ui/build/static/css/*.css',
  'ui/build/static/css/*.css.map',
  'ui/build/static/js/*.js',
  'ui/build/static/js/*.js.map',
}
