# MySQL Root Password
$mysql_password = "beefjerky1337xyz"

# Update Apt Database
exec { 'apt-get update':
    command => '/usr/bin/apt-get update',
}

# Apache Server
package { 'apache2':
    ensure  => present,
    require => Exec['apt-get update'],
}

# Apache mod_wsgi plugin
package { 'libapache2-mod-wsgi':
    ensure  => present,
    require => Package['apache2'],
}

# Configure Apache
file { '/etc/apache2/httpd.conf':
    ensure  => present,
    require => Package['libapache2-mod-wsgi'],
    source  => '/vagrant/templates/httpd.conf',
}

# Restart Apache
service { 'apache2':
    ensure => running,
    subscribe => File['/etc/apache2/httpd.conf'],
}

# MySQL Server
# Also pulls in support packages such as client
package { 'mysql-server':
    ensure  => present,
    require => Exec['apt-get update'],
}

# MySQL Python Library
package { 'python-mysqldb':
    ensure   => present,
    require  => Package['mysql-server'],
}

# Set the MySQL Root Password
exec { "Set MySQL server root password":
    subscribe   => Package['mysql-server'],
    refreshonly => true,
    unless      => "mysqladmin -uroot -p$mysql_password status",
    path        => "/bin:/usr/bin",
    command     => "mysqladmin -uroot password $mysql_password",
}

# Create the KySAT Database
exec { "create kysat database":
    subscribe   => Exec['Set MySQL server root password'],
    refreshonly => true,
    path        => "/bin:/usr/bin",
    command     => "mysqladmin -uroot -p$mysql_password create kysat",
}

# Python Imaging Library
package { 'python-imaging':
    ensure  => present,
    require => Exec['apt-get update'],
}

# Python Package Manager
package { 'python-pip':
    ensure  => present,
    require => Exec['apt-get update'],
}

# Django Web Framework
package { 'Django':
    ensure   => present,
    require  => Package['python-pip'],
    provider => pip,
}

# Make Utility
package { 'make':
    ensure  => present,
    require => Package['Django'],
}

# Less Compiler
package { 'node-less':
    ensure  => present,
    require => Package['make'],
}

# Build the Project
exec { 'build project':
    subscribe   => Package['node-less'],
    refreshonly => true,
    path        => "/bin:/usr/bin",
    command     => "make -C /vagrant/"
}
