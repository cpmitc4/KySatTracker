Vagrant.configure("2") do |config|

    # Base Box
    config.vm.box = "precise32"

    # Base Box URL
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"

    # Create a private network, which allows host-only access to the machine
    config.vm.network :private_network, ip: "192.168.33.10"

    # Provision VM w/ Puppet
    config.vm.provision :puppet do |puppet|
        puppet.manifests_path = "manifests"
        puppet.manifest_file  = "development.pp"
    end

end
