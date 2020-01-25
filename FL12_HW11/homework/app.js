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
		if (node.folder) {
			list.innerHTML = `<span class="folder"><i class="material-icons color">folder</i>${node.title}</span>`;
			if (!node.children) {
				const list2 = document.createElement('li');
				list2.setAttribute('class', 'empty');
				list2.innerHTML = 'Folder is empty';
				list.appendChild(list2);
			}
		} else {
			list.innerHTML = `<i class="material-icons md-inactive">insert_drive_file</i>${node.title}`;
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
		// this.classList.toggle('caret-down');
	});
}
