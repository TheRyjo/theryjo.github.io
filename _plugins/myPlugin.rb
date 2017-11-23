require 'Jekyll'

puts "this is a test!!!!!!"
Jekyll.logger.info("THIS IS A TEST!!!!!!!")

Jekyll::Hooks.register :site, :post_write do |site|
  loop do
    puts 'test!!!'
    sleep 100
  end
end