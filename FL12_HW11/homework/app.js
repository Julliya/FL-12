const structure = [
	{
		folder: true,
		title: 'Films',
		children: [
			{
				title: 'Iron Man.avi'
			},
			{
				folder: true,
				title: 'Fantasy',
				children: [
					{
						title: 'The Lord of the Rings.avi'
					},
					{
						folder: true,
						title: 'New folder 1',
						children: false
					}
				]
			}
		]
	},
	{
		folder: true,
		title: 'Documents',
		children: [
			{
				folder: true,
				title: 'EPAM Homework answers',
				children: null
			}
		]
	}
];

const rootNode = document.getElementById('root');

function createDOM(container, array) {
	const ul = document.createElement('ul');
	container.appendChild(ul);
	if (container.firstChild !== rootNode.firstChild) {
		ul.setAttribute('class', 'hidden');
	}
	for (let node of array) {
		const list = document.createElement('li');
		const sp = document.createElement('span');
		sp.setAttribute('class', 'item');
		list.appendChild(sp);
		if (node.folder) {
			sp.classList.add('folder');
			sp.innerHTML = `<i class="material-icons color">folder</i>${node.title}`;
			if (!node.children) {
				const ul2 = document.createElement('ul');
				ul2.setAttribute('class', 'hidden');
				sp.after(ul2);
				const list2 = document.createElement('li');
				list2.setAttribute('class', 'empty');
				list2.innerHTML = 'Folder is empty';
				ul2.appendChild(list2);
			}
		} else {
			sp.innerHTML = `<i class="material-icons md-inactive">insert_drive_file</i>${node.title}`;
		}
		ul.appendChild(list);

		if (node.children) {
			createDOM(list, node.children);
		}
	}
}

createDOM(rootNode, structure);

const toggler = document.getElementsByClassName('folder');
for (let i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener('click', function() {
		this.parentElement.querySelector('.hidden').classList.toggle('active');
		if (this.nextSibling.classList.contains('active')) {
			this.firstChild.innerHTML = 'folder_open';
		} else {
			this.firstChild.innerHTML = 'folder';
		}
	});
}

const lists = document.getElementsByClassName('item');
for (let i = 0; i < lists.length; i++) {
	lists[i].addEventListener('mouseover', function() {
		this.classList.add('hover');
	});
	lists[i].addEventListener('mouseout', function() {
		this.classList.remove('hover');
	});
}
